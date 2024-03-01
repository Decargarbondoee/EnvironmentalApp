from datetime import datetime, timedelta
import json
from flask import request
from flask_jwt_extended import (
    get_jwt,
    get_jwt_identity,
    jwt_required
)
from flask_restful import Resource
from app.models import Subscription
from app.schemas.subscription import SubscriptionSchema

subscription_schema = SubscriptionSchema()

class SubscriptionResource(Resource):
    @classmethod
    def post(cls):
        subscription = subscription_schema.load(request.get_json())
        
        subscription.save_to_db()

        return {"message": "created successfully."}, 201
    
#class TaskUpdateResource(Resource):
    #@classmethod
    #def put(cls, task_id: int):
        #task_data = task_schema.load(request.get_json)

        #task = Tasks.find_by_id(task_data.id)

        #if not task:
            #Tasks.set_task(task_data.task)
            #task.save_to_db()

        #else:
            #return{"message": "User not found"}, 404
        #return task_schema.dump(task), 200

class SubscriptionUpdateResource(Resource):
    @classmethod
    def put(cls, subscription_id: int):
        subscription = Subscription.find_by_id(subscription_id)

        if not subscription:
            return{"message": "Not Found"}, 404
        
        #Load the task data from the request
        update_subscription_data = subscription_schema.load(request.get_json())

        #update the task attribute with the new data
        # subscription.subscripername = update_subscription_data.subscripername
        # subscription.taskdescription = update_subscription_data.taskdescription
        # subscription.startdate = update_subscription_data.startdate
        # subscription.enddate = update_subscription_data.enddate
        # subscription.status = update_subscription_data.status
        # subscription.priority = update_subscription_data.priority
        # subscription.visibility = update_subscription_data.visibility
        # subscription.user_id = update_subscription_data.user_id

        #Save the updated task to the database
        subscription.save_to_db()

        return{"message": "updated Successfully"}, 200
    
class SubscriptionDetailsResource(Resource):
    @classmethod
    def get(cls, subscription_id: int):
        subscription = Subscription.find_by_id(subscription_id)
        
        if not subscription:
            return {"message": "Subscription not found"}, 404
        return subscription_schema.dump(subscription), 200
    
class SubscriptionDeleteResource(Resource):
    @classmethod
    def delete(cls, subscription_id: int):
        subscription = Subscription.find_by_id(subscription_id)

        if not subscription:
            return {"message": "Subscription not found"}, 404
        subscription.delete_from_db()
        return {"message": "Subscription deleted successfully"}, 200    
    

