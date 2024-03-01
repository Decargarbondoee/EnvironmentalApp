from flask import jsonify
from marshmallow import ValidationError

from app import app, jwt, api

from app.resources.user import(
UserRegister, 
UserLogin, 
UserDetailsResource, 
UserUpdateResource, 
UserPasswordUpdateResource, 
UserDeleteResource,
UserPasswordUpdateResource
)

from app.resources.subscription import (
SubscriptionResource,
SubscriptionUpdateResource, 
SubscriptionDetailsResource, 
SubscriptionDeleteResource
)

from app.resources.subscription import SubscriptionResource
from app.resources.subscription import SubscriptionUpdateResource, SubscriptionDetailsResource, SubscriptionDeleteResource
from app.resources.extrapickup import ExtraPickupResource
from app.resources.request import RequestResource
from app.resources.payment import PaymentResource

from app.resources.image import Avatar, AvatarUpload, ImageUpload, Image


api.add_resource(UserRegister, "/register")
api.add_resource(UserLogin, "/login")
api.add_resource(UserDetailsResource, "/user-details/<int:user_id>")
# api.add_resource(UserUpdateResource, "/user-update/<int:user_id>")
# api.add_resource(UserPasswordUpdateResource, "/Update-password/<int:user_id>")
api.add_resource(UserDeleteResource, "/user-delete/<int:user_id>")
api.add_resource(SubscriptionResource, "/create_subscription")
api.add_resource(SubscriptionUpdateResource, "/update_subscription/<subscription_id>")
api.add_resource(SubscriptionDetailsResource, "/subscription-details/<int:subscription_id>")
api.add_resource(SubscriptionDeleteResource, "/subscription-delete/<int:subscription_id>") 
api.add_resource(ExtraPickupResource, "/create_extrapickup")
api.add_resource(RequestResource, "/create_request")
api.add_resource(PaymentResource, '/payment')
api.add_resource(ImageUpload, "/upload/image/<int:user_id>")
api.add_resource(Image, "/image/<string:filename>/<int:user_id>")
api.add_resource(AvatarUpload, "/upload/avatar")
api.add_resource(Avatar, "/avatar/<int:user_id>")

@app.route('/user-update/<int:user_id>')
@app.route('/')
@app.route('/index')
def index():
    return 'Welcome to my project!!'