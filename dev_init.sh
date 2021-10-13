#!/bin/bash

# envs
export FLASK_ENV=development
export FLASK_APP=app

# venv
deactivate

if [ ! -d "./venv" ]
then
  python3 -m venv venv
fi

source ./venv/bin/activate

# dependencies
pip install -r requirements.txt
echo Dependencies installed!

# initialize the db
echo Do you want to initialize the database?
flask init-db

# upgrade to latest db version
flask db upgrade head

# clear port
killport() {
  sudo lsof -i tcp:$1 | awk 'NR!=1 {print $2}' | xargs sudo kill -9
}
killport 5000

# launch app using flask run
flask run -h localhost -p 5000
