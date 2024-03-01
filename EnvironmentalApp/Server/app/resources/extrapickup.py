from datetime import datetime, timedelta
import json
from flask import request
from flask_jwt_extended import (
    get_jwt,
    get_jwt_identity,
    jwt_required
)
from flask_restful import Resource
from app.models import ExtraPickup
from app.schemas.extrapickup import ExtraPickupSchema

extrapickup_schema = ExtraPickupSchema()

class ExtraPickupResource(Resource):
    @classmethod
    def post(cls):
        extrapickup = extrapickup_schema.load(request.get_json())
        
        extrapickup.save_to_db()

        return {"message": "Comment created successfully."}, 201
