from datetime import datetime, timedelta
import json
from flask import request
from flask_jwt_extended import (
    get_jwt,
    get_jwt_identity,
    jwt_required
)
from flask_restful import Resource
from app.models import SpecialPickup
from app.schemas.specialpickup import SpecialPickupSchema

specialpickup_schema = SpecialPickupSchema()

class SpecialPickupResource(Resource):
    @classmethod
    def post(cls):
        specialpickup = specialpickup_schema.load(request.get_json())
        
        specialpickup.save_to_db()

        return {"message": "Comment created successfully."}, 201
