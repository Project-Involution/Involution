from flask import request, jsonify
import server
from server.models.user import User
from flask import Blueprint

bp = Blueprint("signup", __name__)
db = server.db

@bp.route("/signup", methods=['POST'])
def signup():

    username = request.json["username"]
    password = request.json["password"]
    email = request.json["email"]

    user = User.query.filter_by(username=username).first()
    if not user:
        user = User(username, password, email)
        db.session.add(user)
        db.session.commit()
        resp = jsonify({"msg": "New user registered."})
    else:
        resp = jsonify({"msg": "User already exist."})
    return resp
