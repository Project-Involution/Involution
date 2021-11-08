from flask_login import LoginManager, login_user, logout_user, current_user
from flask import current_app, redirect, url_for, request, jsonify, g, session
import server
from server.models.user import User
from flask import Blueprint

bp = Blueprint("login", __name__)

login_manager = LoginManager()
login_manager.init_app(current_app)
db = server.db


@login_manager.user_loader
def load_user(user_id):
    return User.query.filter_by(id=user_id).first()


@bp.route("/login", methods=['POST'])
def login():

    username = request.json["username"]
    password = request.json["password"]

    msg = None

    print(id(session), session)
    print(current_user)

    if not current_user.is_authenticated:
        
        user = User.query.filter_by(username=username).first()

        if user and user.verify_password(password):
            login_user(user)
            g.current_user = user
            msg = f"{username} has successfully logged in!"

        else:
            msg = "Unknown user or incorrect password."

    else:
        msg = f"{current_user.username} has already logged in!"

    resp = jsonify({
    "msg": msg,
    })

    return resp


@bp.route("/logout", methods=['GET', 'POST'])
def logout():
    logout_user()
    return redirect(url_for("index.index"))
