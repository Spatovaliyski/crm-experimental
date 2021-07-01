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

    # Provide new customer with all needed data
    user = {
        "id": max(currentIDs) + 1,
        "firstname": json_data["firstname"],
        "lastname": json_data["lastname"],
        "mobile": json_data["mobile"],
        "email": json_data["email"],
        "membership": 0,
    }

    # Append to customers
    customers.append(user)
    
    # Write new changes
    with open ('data.json', 'w') as f:
        json.dump(data, f, indent=2)

    return user


@app.route('/api/customers/delete/', methods=["DELETE"])
def deleteUser():
    #Get new data from request
    json_data = request.get_json(force=True)
    usersID = json_data['idsToDelete']

    for i in range(0, len(usersID)):
        if usersID[i] == usersID:
            found = True
            #Return found user
            return jsonify(usersID[i])

    #Find user, if found make a new array without the index of the user and assign it to the JSON data
    for i in range(0, len(usersID)):
        # print("Cusomers ID:", customers[i]['id'])
        # print("Users ID:", usersID)
        if customers[i]['id'] in usersID:
            customers.remove(customers[i])
        else :
            print("w/e")

    #Write new changes
    with open('data.json', 'w') as user_file:
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
