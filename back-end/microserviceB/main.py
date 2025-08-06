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
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

app = FastAPI()
models.Base.metadata.create_all(bind=engine)
JWT_KEY = os.getenv('JWT_KEY')

class SignUpRequest(BaseModel):
  email: str
  first_name: str
  last_name: str
  password: str

class UserResponse(BaseModel):
  id: int
  email: str
  first_name: str
  last_name: str

  class Config:
      orm_mode = True


class LoginRequest(BaseModel):
  email:str
  password: str

def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()

db_dependency = Annotated[Session, Depends(get_db)]



@app.post('/signup')
async def create_user(user: SignUpRequest, db:db_dependency, status_code=status.HTTP_201_CREATED):
  existing_user = db.query(models.User).filter(models.User.email == user.email).first()
  if existing_user:
    raise HTTPException(status_code=400, detail='Email already registered to account')
  
  hashed_password = generate_password_hash(user.password)
  new_user = models.User(
    email = user.email,
    first_name = user.first_name,
    last_name = user.last_name,
    password = hashed_password
  )

  db.add(new_user)
  db.commit()
  db.refresh(new_user)
  return new_user


@app.post('/login')
def login(user: LoginRequest, db:db_dependency, status_code=status.HTTP_200_OK):
  existing_user = db.query(models.User).filter(models.User.email == user.email).first()

  if not user or not check_password_hash(existing_user.password, user.password):
    raise HTTPException(status_code=401, detail='Invalid email or password')
  
  # token = jwt.encode({
  #             'sub': user.email, 
  #             'exp': datetime.now(timezone.utc) + timedelta(hours=1)}, 
  #             JWT_KEY,
  #             algorithm='HS256')
  token = jwt.encode({
            'sub': user.email, 
            'exp': datetime.now(timezone.utc) + timedelta(hours=1)}, 
            JWT_KEY,
            algorithm='HS256')
  return {
    "user_id": user.email,
    "token": token,
  }

security_schema = HTTPBearer()
def verify_token(token: HTTPAuthorizationCredentials = Depends(security_schema)):
  token_cred = token.credentials
  try:
    payload = jwt.decode(token_cred, JWT_KEY, algorithms=['HS256'])
    return payload
  except JWTError:
    raise HTTPException(
      status_code=status.HTTP_401_UNAUTHORIZED,
      detail='Invalid or expired token'
    )
    

@app.get('/verify_token')
def verify(payload = Depends(verify_token)):
  print(payload)
  user_id = payload.get('sub')
  return {'message' : user_id}

