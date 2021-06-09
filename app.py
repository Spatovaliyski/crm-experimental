from flask import Flask, request
from flask import json
from flask import jsonify
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
import os

SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
json_url = os.path.join(SITE_ROOT, 'static', '../data.json')
data = json.load(open(json_url))

customers = data['customers']

app = Flask(__name__)
api = Api(app)
CORS(app)

parser = reqparse.RequestParser()
parser.add_argument("id")
parser.add_argument("lastname")

@app.route('/api/tickets/', methods=["GET"])
def getAllUsers():
    return jsonify(customers)

@app.route('/api/tickets/add/', methods=["POST"])
def addUser():
    json_data = request.get_json(force=True)

    user = {
        "id": len(customers) + 1,
        "firstname": json_data["firstname"],
        "lastname": json_data["lastname"],
        "mobile": json_data["mobile"],
        "email": json_data["email"],
        "membership": 0,
    }

    customers.append(user)

    return user

app.run(debug=True)
