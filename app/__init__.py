import os
from flask import Flask

try:
    from db import get_db
except ImportError:
    from .db import get_db


def create_app():
    app = Flask(__name__, instance_relative_config=True)

    from app import db

    db.init_app(app)

    app.config.from_mapping(
        SECRET_KEY="dev",
        SQLALCHEMY_DATABASE_URI=f'sqlite://{os.path.join(app.instance_path, "app.db")}',
    )

    # apps start here

    from app import index

    app.register_blueprint(index.bp)

    return app


# For debugging usage.
# app = create_app()
# app.run(debug=True, use_debugger=False, use_reloader=False)
# Place a breakpoint in front of the above line if debugger is needed.
