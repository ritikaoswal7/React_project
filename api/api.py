from flask import Flask, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db, User
from datetime import datetime
from sqlalchemy import create_engine
from sqlalchemy import update
from flask_login import LoginManager, current_user


app = Flask(__name__)
app.config.from_pyfile('config.py')
login_manager = LoginManager(app)
# app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:postgres@localhost:5432/users"
# app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)
 

@app.route('/add_number/<int:mobile>', methods=['POST', 'GET'])
def addNumber(mobile):

    db.create_all()
    db.session.commit()
    data = User(mobile_number=mobile,
                created_date=datetime.now(), is_verified=False)

    db.session.add(data)
    db.session.commit()
    return jsonify(ok=True)


@app.route('/verification/<int:num>', methods=['POST', 'GET'])
def change_verification(num):
    records = db.session.query(User).all()
    for record in records:
        if(record.mobile_number == num):
            main_record = record

    db.session.query(User).filter_by(
        id=record.id).update({"is_verified": True})
    db.session.commit()
    return jsonify(ok=True)


if __name__ == '__main__':
    app.run(debug=True)
