from flask_login import LoginManager, login_user, logout_user, current_user
from flask import current_app, redirect, url_for, flash, session, request, jsonify, Response
from flask_cors import CORS, cross_origin
import server
from server.models.user import User
from flask import render_template, Blueprint
from os import path

bp = Blueprint("login", __name__)

login_manager = LoginManager()
login_manager.init_app(current_app)
db = server.db


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


@bp.route("/login", methods=['POST'])
def login():

    username = request.json["username"]
    email = request.json["email"]
    password = None

    resp = jsonify({
        "username": username,
        "email": email,
    })
    
    if not current_user.get_id():
        user = User.query.filter_by(username=username).first()

        if user and user.verify_password(password):
            login_user(user)
            msg = f"{username} has successfully logged in!"

        else:
            msg = "Unknown user or incorrect password."

        resp = jsonify({
        "msg": msg,
        })

        return resp

    session.pop('_flashes', None)
    if current_user.get_id():
        flash("Already logged in!")
    kwargs = {
        "form": form,
    }
    template = path.join("login.html")
    return render_template(template, **kwargs)


@bp.route("/logout", methods=['GET', 'POST'])
def logout():
    logout_user()
    return redirect(url_for("index.index"))
