from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Product(BaseModel):
    id: int
    name: str
    supplier: str
    min_order: str

# Example in-memory data
products = [
    Product(id=1, name="Acetic Acid", supplier="ChemGlobal Inc.", min_order="100kg"),
    Product(id=2, name="Sodium Hydroxide", supplier="MegaChem Ltd.", min_order="50kg"),
    Product(id=3, name="Ethanol", supplier="BioChem Partners", min_order="200L"),
]

@app.get("/", tags=["Root"])
def read_root():
    return {"message": "Welcome to the Auga backend!"}

@app.get("/marketplace/products", response_model=List[Product], tags=["Marketplace"])
def get_products():
    return products
