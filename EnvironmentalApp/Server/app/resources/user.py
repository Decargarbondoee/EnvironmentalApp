from datetime import datetime, timedelta
import json
import logging
from flask import request
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    get_jwt,
    get_jwt_identity,
    jwt_required
)
from flask_restful import Resource
from app.models import Users
from app.schemas.user import UserSchema

user_schema = UserSchema()
users_schema = UserSchema(many=True)

class UserRegister(Resource):
    @classmethod
    def post(cls):
        user = user_schema.load(request.get_json())

        if user.find_by_username(user.username):
            return {"message": "A user with that username already exists."}, 400
        
        if user.find_by_email(user.email):
            return {"message": "A user with that email already exists."}, 400
        
        # if user.find_by_phone(user.phone):
        #     return {"message": "A user with that phone number already exists."}, 400
        
        user.set_password(user.password)

        user.save_to_db()

        return user_schema.dump(user), 200

        # return {"message": "User created successfully."}, 201
    
class UserLogin(Resource):
    @classmethod
    def post(cls):
        user_data = user_schema.load(request.get_json())

        user = Users.find_by_email(user_data.email)

        if user and user.check_password(user_data.password):
            access_token = create_access_token(identity=user.id, fresh=True)
            refresh_token = create_refresh_token(user.id)

            return{
                "access_token": access_token,
                "refresh_token": refresh_token,
                "email": user.email,
                "lastname": user.lastname,
                "id": user.id
            }, 200
        return{"message": "invaild credentials"}, 401

class UserDetailsResource(Resource):
    @classmethod
    def get(cls, user_id: int):
        user = Users.find_by_id(user_id)
        
        if not user:
            return {"message": "User not found"}, 404
        return user_schema.dump(user), 200

class UserUpdateResource(Resource):
    @classmethod
    def put(cls, user_id: int):
        # Find the user by their ID
        user = Users.find_by_id(user_id)

        # If the user doesn't exist, return a 404 response
        if not user:
            return {"message": "User not found"}, 404
        
        # Load the user data from the request payload
        update_user_data = user_schema.load(request.get_json())

        # Update the user attributes with the new data
        user.firstname = update_user_data.get('firstname', user.firstname)
        user.lastname = update_user_data.get('lastname', user.lastname)
        user.username = update_user_data.get('username', user.username)
        user.email = update_user_data.get('email', user.email)
        user.gender = update_user_data.get('gender', user.gender)
        user.address = update_user_data.get('address', user.address)
        user.phone = update_user_data.get('phone', user.phone)
        # Update other user attributes as needed

        # Save the updated user to the database
        user.save_to_db()

        # Return a success response
        return {"message": "User updated successfully"}, 200

    
class UserDeleteResource(Resource):
    @classmethod
    def delete(cls, user_id: int):
        user = Users.find_by_id(user_id)

        if not user:
            return {"message": "user not found"}, 404
        user.delete_from_db()
        return {"message": "user deleted successfully"}, 200

class UserPasswordUpdateResource(Resource):
    @classmethod
    def put(cls):
        user_data = user_schema.load(request.get_json())

        user = Users.find_by_email(user_data.email)

        if user:
            user.set_password(user_data.password)
            user.save_to_db()

        else:
            return{"message": "User not found"}, 404
        return user_schema.dump(user), 200
    
    user_schema = UserSchema()
    
        


