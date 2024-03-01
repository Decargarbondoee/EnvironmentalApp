from typing import List
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
engine = create_engine('sqlite:///app.db', echo=True)  # Replace 'your_database.db' with your database file
from datetime import datetime, date, timedelta
from sqlalchemy.dialects.mysql import LONGTEXT
from sqlalchemy import or_
from werkzeug.security import generate_password_hash, check_password_hash
import hashlib
import pytz
import moment



from app import app, db


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, index=True)
    firstname = db.Column(db.String(50))
    lastname = db.Column(db.String(50))
    username = db.Column(db.String(50))
    email = db.Column(db.String(50))
    gender = db.Column(db.String(50))
    address = db.Column(db.String(250))
    phone = db.Column(db.String(50))
    password = db.Column(db.String(150))
    timestamp = db.Column(db.DateTime, default=datetime.now())


    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()

    def set_password(self, password: str):
        self.password = generate_password_hash(password)

    def check_password(self, password: str):
        return check_password_hash(self.password, password)
    
    @classmethod
    def find_by_id(cls, _id: int) -> "Users":
        return cls.query.filter_by(id=_id).first()
    
    @classmethod
    def find_by_username(cls, username: str) -> "Users":
        return cls.query.filter_by(username=username).first()
    
    @classmethod
    def find_by_email(cls, email: str) -> "Users":
        return cls.query.filter_by(email=email).first()

    def update_user(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)
            db.session.commit()

        user = Users.query.get(id)
        # Update user's information
        user.update_user(firstname="First Name",
                     lastname="Last Name",
                     username="User Name",
                     email="newemail@example.com",
                     gender="Gender",
                     address="Address",
                     phone="Phone"
                     )
# # 

class Subscription(db.Model):
    __tablename__ = 'subscription'

    subscriptor_id = Column(Integer, primary_key=True, index=True)
    plan_name = Column(String(250), nullable=False)
    plan_type = Column(String(250), nullable=False)
    start_date = Column(DateTime, index=True, nullable=False)
    end_date = Column(DateTime, index=True, nullable=False)
    status = Column(String(100))
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)

    # Define relationships if needed
    # user = relationship("User", back_populates="subscriptions")

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, _id: int) -> "Subscription":
        return cls.query.get(_id)
    
    @classmethod
    def find_by_userid(cls, _userid: int) -> "Subscription":
        return cls.query.filter_by(user_id=_userid).first()

    #Create a metadata instance
    
    #metadata = MetaData()

# Define the subscription table
#subscription_table = Table('subscription', #Metadata, 
    #Column('id', Integer, primary_key=True)
    #Column('plan_name', String),
    #Column('plan_type', String),
    #Column('start_date', DateTime),
    #Column('end_date', DateTime),
    #Column('status', String),
    #Column('user_id', Integer),
    #Column('timestamp', DateTime)
#)

#Create all tables
#metadata.create_all(engine)

#class Subscription(db.Model):
    # ... (other columns)

    # def save_to_db(self) -> None:
    #     db.session.add(self)
    #     db.session.commit()

    # def delete_from_db(self) -> None:
    #     db.session.delete(self)
    #     db.session.commit()

    # @classmethod
    # def find_by_id(cls, _id: int) -> "Subscription":
    #     return cls.query.filter_by(id=_id).first()
    
    # @classmethod
    # def find_by_userid(cls, _userid: int) -> "Subscription":
    #     return cls.query.filter_by(user_id=_userid).first()

#class Comments(db.Model):
    #id = db.Column(db.Integer, primary_key=True, index=True)
    #user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    #message = db.Column(db.String(1000), nullable=False)
    #timestamp = db.Column(db.DateTime, default=datetime.now())
class ExtraPickup(db.Model):
    id = db.Column(db.Integer, primary_key=True, index=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    reason = db.Column(db.String(1000), nullable=False)  # Represents reason for extra pickup
    timestamp = db.Column(db.DateTime, default=datetime.now())

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, _id: int) -> "ExtraPickup":
        return cls.query.filter_by(id=_id).first()
    
    @classmethod
    def find_by_userid(cls, _userid: int) -> "ExtraPickup":
        return cls.query.filter_by(user_id=_userid).first()
    
class SpecialPickup(db.Model):
    id = db.Column(db.Integer, primary_key=True, index=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    reason = db.Column(db.String(1000), nullable=False)  # Represents reason for special pickup
    timestamp = db.Column(db.DateTime, default=datetime.now())

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, _id: int) -> "SpecialPickup":
        return cls.query.filter_by(id=_id).first()
    
    @classmethod
    def find_by_userid(cls, _userid: int) -> "SpecialPickup":
        return cls.query.filter_by(user_id=_userid).first()
    
# Request table
class Request(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))  # Ensure correct table name for the foreign key
    request_name = db.Column(db.String(250), nullable=False)
    request_description = db.Column(db.String(500), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)  # Optional: default value for timestamp

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, _id: int) -> "Request":
        return cls.query.filter_by(id=_id).first()
    
    # Assuming 'task_id' is a valid attribute in the model
    # @classmethod
    # def find_by_taskid(cls, _task_id: int) -> "Request":
    #     return cls.query.filter_by(task_id=_task_id).first()

    
# class Payment(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'))  
#     amount = db.Column(db.Float, nullable=False)
#     status = db.Column(db.String(20), default='Pending')

#     @staticmethod
#     def create_payment(amount: float, user_id: int) -> "Payment":
#         new_payment = Payment(amount=amount, user_id=user_id)
#         db.session.add(new_payment)
#         db.session.commit()
#         return new_payment

from app import db  # Import the db object from your Flask app

class Payment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    username = db.Column(db.String(20), nullable=False)  
    amount = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(20), default='Pending')

    @staticmethod
    def create_payment(amount: float, user_id: int) -> "Payment":
        new_payment = Payment(amount=amount, user_id=user_id)
        db.session.add(new_payment)
        db.session.commit()
        return new_payment





            # # Create a new payment entry in the database
            # new_payment = Payment(amount=amount)
            # db.session.add(new_payment)
            # db.session.commit()




