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


# launch app using flask run
flask run -h localhost -p 5000
