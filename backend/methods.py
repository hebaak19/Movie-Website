"""this file will handle the functionality"""
from pyswip import Prolog
from pydantic import BaseModel

prolog=Prolog()
prolog.consult('expert-system')


class UserPreferences(BaseModel):
    """class to ensure all prefrences are strings"""
    genre:str
    director:str
    rating:str


class ExpertSystem:
    """class for handling the welcome msg and recommendation"""
    def welcome_msg(self):
        """It will return the welcome msg"""
        message=list(prolog.query('welcome_msg(Message).'))
        if message:
            return {"message": message[0]["Message"]}

    def recommend(self,prefrence:UserPreferences):
        """It will return the user prefrences"""
        genre=prefrence.genre
        director=prefrence.director
        rating=prefrence.rating

        select_query=f"select_movie('{genre}', '{director}', '{rating}',Image, Movie)"
        result=list(prolog.query(select_query))
        if result:
            recommendations = []
            images = []

            for res in result:
                recommendations.append(res["Movie"])
                images.append(res["Image"])
            return {"movies": recommendations, "images": [f"http://localhost:3000{img}" for img in images] }


