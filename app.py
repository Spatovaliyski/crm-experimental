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
    data = json.load(open(json_url))
    customers = data['customers']

    return jsonify(customers)

@app.route('/api/tickets/add/', methods=["POST"])
def addUser():
    json_data = request.get_json(force=True)
    
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

@app.route('/api/tickets/delete/', methods=["DELETE"])
def deleteUser():
    """
    Takes in the user's id to be deleted, redirect back to main page when done
    :param deleteUserIDInput - user's ID
    :return - redirect back to main page
    """

    #Get new data from request
    requestData = request.form
    usersID = requestData['idsToDelete']
    print(usersID)

    # #Load user data from db
    # userFile = os.path.join(app.static_folder, 'data.json')
    # with open(userFile) as user_file:
    #     data = json.load(user_file)
    # users = data['customers']

    # #Find user, if found make a new array without the index of the user and assign it to the JSON data
    # for i in range(0, len(users)):
    #     if users[i]['id'] == int(usersID):
    #         newUsers = users[0:i]
    #         newUsers += users[i + 1:len(users)]

    #         data['customers'] = newUsers
    #         data['total'] -= 1

    # #Write new changes
    # with open(userFile, 'w') as user_file:
    #     json.dump(data, user_file, indent=2)

    # #Redirect to homepage
    # return redirect(url_for('default'))


app.run(debug=True)
