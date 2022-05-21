from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'userdata'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(20))
    mobile_number = db.Column(db.String(20), nullable=False, unique=True)
    email = db.Column(db.String(20))
    created_date = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow)
    updated_date = db.Column(db.DateTime)
    is_verified = db.Column(db.Boolean)

    def __init__(self,  mobile_number, created_date,  is_verified):
        self.mobile_number = mobile_number
        self.created_date = created_date
        self.is_verified = is_verified

    def __repr__(self):
        return f"{self.first_name}:{self.last_name}:{self.mobile_number}:{self.email}:{self.created_date}:{self.updated_date}:{self.is_verified}"


