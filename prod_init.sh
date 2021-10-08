#!/bin/bash

# envs
export FLASK_ENV=production
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
echo Dependenceis installed!

# init database and run
# echo Trying to init database...
# flask init-db

# launch app using gunicorn
python3 -m gunicorn -b 0.0.0.0:8000 "app:create_app()"
