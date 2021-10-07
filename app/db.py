import click
from flask import current_app, g
from flask.cli import with_appcontext
from flask_sqlalchemy import SQLAlchemy


def get_db():
    if "db" not in g:
        g.db = SQLAlchemy(current_app)
    return g.db


def close_db(e=None):
    db = g.pop("db", None)

    if db is not None:
        db.close()


def init_db():
    db = get_db()
    db.drop_all()


@click.command("init-db")
@with_appcontext
def init_db_command():
    if (
        input(
            "This operation will erase all data and init again, proceed? (y/n) (Press enter to skip)\n"
        ).lower()
        == "y"
    ):
        init_db()
        click.echo("Database initialized")


def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)
