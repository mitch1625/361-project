from fastapi import FastAPI, HTTPException, Depends, status, Request, Header, Response
from database import engine, SessionLocal, Base
from models import *
import models
from sqlalchemy.orm import Session
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from datetime import datetime, timezone, timedelta
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
from schemas import *
import dotenv
from fastapi.responses import JSONResponse

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or ["*"] to allow all
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
JWT_KEY = os.getenv('JWT_KEY')

models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_current_user(authorization: str = Header(...)):
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail='Invalid auth header')
    token = authorization.split(" ")[1]
    try:
        content = jwt.decode(token, JWT_KEY, algorithms=["HS256"])
        return content['sub']
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

def get_or_create_cart(db: Session, user_id: str):
    cart = db.query(Cart).filter(Cart.user_id == user_id).first()
    if not cart:
        cart = Cart(user_id=user_id)
        db.add(cart)
        db.commit()
        db.refresh(cart)
    return cart

@app.post('/cart/add/')
def add_to_cart(item: CartItemRequest, db: Session = Depends(get_db), user_id: str = Depends(get_current_user), status_code=status.HTTP_201_CREATED):
    print(user_id)
    print('Received the request')
    cart = get_or_create_cart(db, user_id)
    cart_item = db.query(CartItem).filter(
        CartItem.cart_id == cart.id,
        CartItem.product_id == item.product_id
    ).first()

    if cart_item:
        cart_item.quantity += item.quantity
    else:
        new_item = CartItem(
            cart_id=cart.id,
            product_id=item.product_id,
            quantity=item.quantity
        )
        db.add(new_item)
    
    db.commit()
    print({"message": "Item added to cart", "product_id": item.product_id, "quantity": item.quantity})
    return JSONResponse(
        content={"message": "Item added to cart", "product_id": item.product_id, "quantity": item.quantity},
        status_code=status.HTTP_201_CREATED
    )

@app.get('/cart', response_model=CartResponse)
def get_cart(user_id: str = Depends(get_current_user), db: Session = Depends(get_db)):
    cart = db.query(Cart).filter(Cart.user_id == user_id).first()
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    
    return {
        "id": cart.id,
        "user_id": cart.user_id,
        "items": [
            CartItemResponse(
                id=item.id,
                product_id=item.product_id,
                quantity=item.quantity,
            )
            for item in cart.items
        ]
    }
