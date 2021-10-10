from flask_login import LoginManager, login_user, logout_user, current_user
from flask import current_app, redirect, url_for, flash, session
from app.models.user import User
from app.models.login import LoginForm, RegisterForm
from app.controllers.db import get_db
from flask import render_template, Blueprint
from os import path

bp = Blueprint("login", __name__, url_prefix="/signin")

login_manager = LoginManager()
login_manager.init_app(current_app)
db = get_db()


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


@bp.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    username = form.username.data
    password = form.password.data
    if form.validate_on_submit() and not current_user.get_id():
        user = User.query.filter_by(username=username).first()

        if user and user.verify_password(password):
            login_user(user)
            flash("Successfully logged in!")

        else:
            flash("Unknown user or incorrect password.", "error")

        return redirect(url_for("index.index"))

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


@bp.route("/register", methods=['GET', 'POST'])
def register():
    form = RegisterForm()
    username = form.username.data
    password = form.password.data
    email = form.email.data

    if form.validate_on_submit():
        user = User.query.filter_by(username=username).first()
        if not user:
            user = User(username, password, email)
            db.session.add(user)
            db.session.commit()
        return redirect(url_for('login.login'))

    kwargs = {
        "form": form,
    }
    template = path.join("register.html")
    return render_template(template, **kwargs)
