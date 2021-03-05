from flask import Flask, request
from flask import json
from flask import jsonify
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse

users = [
    {
        "id": 1,
        "firstname": "Martin",
        "lastname": "Test"
    },
    {
        "id": 2,
        "firstname": "Ivan",
        "lastname": "Ivanov"
    },

    {
        "id": 3,
        "firstname": "Pesho",
        "lastname": "Ivanov"
    },

    {
        "id": 4,
        "firstname": "Martin",
        "lastname": "Test4123"
    },
]

app = Flask(__name__)
api = Api(app)
CORS(app)

parser = reqparse.RequestParser()
parser.add_argument("id")
parser.add_argument("lastname")

@app.route('/api/tickets/', methods=["GET"])
def getAllUsers():
    return jsonify(users)

@app.route('/api/tickets/add/', methods=["POST"])
def addUser():
    json_data = request.get_json(force=True)

    user = {
        "id": 7,
        "firstname": json_data["firstname"],
        "lastname": json_data["lastname"]
    }

    users.append(user)

    return user

app.run(debug=True)
