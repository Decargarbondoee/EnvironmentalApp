from app import ma
from app.models import SpecialPickup

class SpecialPickupSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = SpecialPickup
        dumb_only = ("id",)
        include_fk = True
        load_instance = True