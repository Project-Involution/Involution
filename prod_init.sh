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
echo Dependencies installed!

# database init
flask init-db

# clear port
killport() { 
  sudo lsof -i tcp:$1 | awk 'NR!=1 {print $2}' | xargs sudo kill -9 
}
killport 80

# launch app using gunicorn
sudo ./venv/bin/python -m gunicorn -w 4 -b 0.0.0.0:80 "app:create_app()"
