from app import ma
from app.models import ExtraPickup

class ExtraPickupSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = ExtraPickup
        dumb_only = ("id",)
        include_fk = True
        load_instance = True
