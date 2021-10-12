import click
import os
from flask import current_app
from flask.cli import with_appcontext
from pathlib import Path


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
