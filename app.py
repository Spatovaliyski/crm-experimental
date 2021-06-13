from flask import Flask, request
from flask import json
from flask import jsonify
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
import os

# Basic Server configuration
SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
json_url = os.path.join(SITE_ROOT, 'static', '../data.json')
data = json.load(open(json_url))

customers = data['customers']

app = Flask(__name__)
api = Api(app)
CORS(app)
# End Basic Server configuration

@app.route('/api/customers/', methods=["GET"])
def getAllUsers():
    data = json.load(open(json_url))
    customers = data['customers']

    return jsonify(customers)


@app.route('/api/customers/add/', methods=["POST"])
def addUser():
    json_data = request.get_json(force=True)
    print(json_data)
    
    currentIDs = []
    for i in range(0, len(customers)):
        currentIDs.append(customers[i]['id'])

    user = {
        "id": max(currentIDs) + 1,
        "firstname": json_data["firstname"],
        "lastname": json_data["lastname"],
        "mobile": json_data["mobile"],
        "email": json_data["email"],
        "membership": 0,
    }

    customers.append(user)
    
    with open ('data.json', 'w') as f:
        json.dump(data, f, indent=2)

    return user


@app.route('/api/customers/delete/', methods=["DELETE"])
def deleteUser():
    """
    Takes in the user's id to be deleted, redirect back to main page when done
    :param deleteUserIDInput - user's ID
    :return - redirect back to main page
    """

    #Get new data from request
    json_data = request.get_json(force=True)
    usersID = request.json['idsToDelete']
    print usersID

    for i in range(0, len(usersID)):
        if usersID[i] == usersID:
            found = True
            #Return found user
            return jsonify(usersID[i])

    with open("data.json") as user_file:
        data = json.load(user_file)
    customers = data['customers']

    #Find user, if found make a new array without the index of the user and assign it to the JSON data
    for i in range(0, len(customers)):

        if customers[i]['id'] in usersID:
            customers.remove(customers[i])

    #Write new changes
    with open("data.json", 'w') as user_file:
        json.dump(data, user_file, indent=2)

    #Redirect to homepage
    return data


# Orders
@app.route('/api/orders/', methods=["GET"])
def getAllOrders():
    data = json.load(open(json_url))
    orders = data['orders']

    return jsonify(orders)


app.run(debug=True)
