from flask_login import UserMixin
import app
from werkzeug.security import generate_password_hash, check_password_hash

db = app.db


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=False, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    group = db.Column(db.String(120), unique=False, nullable=True)

    def __init__(self, username, password, email):
        self.username = username
        self.password = generate_password_hash(password)
        self.email = email

    def __repr__(self):
        return '<User %r>' % self.username

    def verify_password(self, pwd):
        return check_password_hash(self.password, pwd)
