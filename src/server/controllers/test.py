from flask import Blueprint
from flask.json import jsonify

bp = Blueprint("test", __name__, url_prefix="/api")

@bp.route("/test", methods=["GET"], strict_slashes=False)
def test_endpoint():

    resp = jsonify({
        "test": "success"
    })
    resp.headers["Access-Control-Allow-Origin"] = "*"
    return resp
