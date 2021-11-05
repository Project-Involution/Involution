from flask import render_template, Blueprint, g
from server.models.user import User
from flask_login import current_user
bp = Blueprint("index", __name__)


@bp.route("/", methods=["GET"])
def index():

    if current_user.get_id():
        username = current_user.username
    else:
        username = None

    kwargs = {"login": "login.login",
              "logout": "login.logout",
              "username": username, }
    return render_template("index.html", **kwargs)
