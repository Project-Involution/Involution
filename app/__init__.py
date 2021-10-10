import os
from flask import Flask


def create_app():
    app = Flask(__name__, instance_relative_config=True)

    app.config.from_mapping(
        SECRET_KEY="dev",
        SQLALCHEMY_DATABASE_URI=f'sqlite:///{os.path.join(app.instance_path, "app.db")}',
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
    )

    # push the app context
    with app.app_context():

        # IMPORTANT :import different models before the db.init_app (so all models are visible to db)
        from .models import user
        from .controllers import db

        db.init_app(app)

        # blueprints start here
        from .controllers import index, login

        app.register_blueprint(index.bp)
        app.register_blueprint(login.bp)

    return app


# For debugging usage.
# app = create_app()
# app.run(debug=True, use_debugger=False, use_reloader=False)
# Place a breakpoint in front of the above line if debugger is needed.
