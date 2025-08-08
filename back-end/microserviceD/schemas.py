from pydantic import BaseModel
from typing import List, Optional

class CartItemBase(BaseModel):
    product_id: int
    quantity: int

class CartItemUpdate(BaseModel):
    quantity: int

class CartItemResponse(CartItemBase):
    id: int
    product_details: Optional[dict] = None

    class Config:
        orm_mode = True

class CartResponse(BaseModel):
    id: int
    user_id: str
    items: List[CartItemResponse]

    class Config:
        orm_mode = True

class CartItemRequest(BaseModel):
    product_id: int
    quantity: int