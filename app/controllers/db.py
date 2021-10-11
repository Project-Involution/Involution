import click
import os
import sqlite3
from flask import current_app, g
from flask.cli import with_appcontext
from flask_sqlalchemy import SQLAlchemy
from pathlib import Path


def create_connection(db_file):
    """ create a database connection to a SQLite database """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print(sqlite3.version)
    except sqlite3.Error as e:
        print(e)
    finally:
        if conn:
            conn.close()


def get_db():

    if "db" not in g:
        g.db = SQLAlchemy(current_app)
    return g.db


def close_db():
    db = g.pop("db", None)

    if db is not None:
        db.close()


def init_db():

    db_location = os.path.join(current_app.instance_path, "app.db")
    db = Path(db_location)
    db.unlink(missing_ok=True)


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
    app.cli.add_command(init_db_command)
    get_db().create_all()
