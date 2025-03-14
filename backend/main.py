"""this file will handle the routes"""
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from methods import ExpertSystem
Expertsystem=ExpertSystem()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class UserPreferences(BaseModel):
    """class to ensure all prefrences are strings"""
    genre:str
    director:str
    rating:str

@app.get("/welcome")
def welome_msg():
    """It will return the welcome msg"""
    result=Expertsystem.welcome_msg()
    return result
@app.post('/recommend')
def recommend(prefrence:UserPreferences):
    """It will return the user prefrences"""
    result=Expertsystem.recommend(prefrence)
    return result
@app.get("/")
def root():
    """test route"""
    return {'message':"hhh"}


