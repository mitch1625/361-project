from fastapi import FastAPI, HTTPException, Depends, status, Request
from pydantic import BaseModel
from typing import List, Annotated
from database import engine, SessionLocal, Base
import models
from sqlalchemy.orm import Session
from werkzeug.security import generate_password_hash, check_password_hash
from jose import JWTError, jwt
from datetime import datetime, timezone, timedelta
import os

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()

db_dependency = Annotated[Session, Depends(get_db)]

@app.get('/all_products', status_code=status.HTTP_200_OK)
async def get_all_products(db:db_dependency):
  print('Getting all products')
  products = db.query(models.Products).all()
  return products

