# from app import ma
# from app.models import Payment

# class PaymentSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = Payment
#         dump_only = ("id",)  # Making ID read-only

# payment_schema = PaymentSchema()
from marshmallow import Schema, fields

class PaymentSchema(Schema):
    user_id = fields.Integer(required=True)
    username = fields.String(required=True)
    amount = fields.Float(required=True)
    status = fields.String(default='Pending')
