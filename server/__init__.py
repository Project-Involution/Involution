import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from server.controllers.db import init_app
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config.from_mapping(
        SECRET_KEY="dev",
        SQLALCHEMY_DATABASE_URI=f'sqlite:///{os.path.join(app.instance_path, "app.db")}',
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
    )

    init_app(app)

    try:
        os.makedirs(app.instance_path)
        
    except OSError:
        pass

    db.init_app(app)
    migrate.init_app(app, db)

    # blueprints start here
    with app.app_context():
        
        from .controllers import test, login, signup
        app.register_blueprint(test.bp)
        app.register_blueprint(login.bp)
        app.register_blueprint(signup.bp)

    return app
