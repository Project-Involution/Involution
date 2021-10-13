import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app.controllers.db import init_app

db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(__name__)

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

    # push the app context
    with app.app_context():

        db.init_app(app)
        migrate.init_app(app, db)

        # blueprints start here
        from .controllers import index, login

        app.register_blueprint(index.bp)
        app.register_blueprint(login.bp)

    return app


# For debugging usage.
# app = create_app()
# app.run(debug=True, use_debugger=False, use_reloader=False)
# Place a breakpoint in front of the above line if debugger is needed.
