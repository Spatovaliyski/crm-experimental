import os
import json
from flask import Flask, jsonify, request, render_template, redirect, url_for

app = Flask(__name__)

app.config['DEBUG'] = True
app.config['JSON_SORT_KEYS'] = False


@app.route('/', methods=["GET"])
def default():
    return render_template("users.html")
    

@app.route('/api/users/all', methods=["GET"])
def getAllUsers():
    """
    Return all users stored in the db in json
    :return data - every user's data in json format
    """

    #Load all user information from db
    userFile = os.path.join(app.static_folder, 'users.json')
    with open(userFile) as user_file:
        data = json.load(user_file)

    return jsonify(data)


@app.route('/api/users', methods=["GET"])
def getUserPage():
    """
    Return users depending on the page and amount of users the client is showing per page
    :param page - which page the user is on
    :param perPage - amount of results to show per page
    :return usersToReturn - specified user's data in json format
    """

    #Get the users to return
    page = int(request.args.get('page'))
    perPage = int(request.args.get('perPage'))

    #Load user data from db
    userFile = os.path.join(app.static_folder, 'users.json')
    with open(userFile) as user_file:
        data = json.load(user_file)

    users = data['data']
    
    #Create JSON data to return
    dataToReturn = {"total": data['total'], "data": users[((page - 1) * perPage):(page * perPage)]}

    #Return specified users
    return jsonify(dataToReturn)


@app.route('/api/users/<int:userID>', methods=["GET"])
def getUser(userID):
    """
    Return a single user's data in json
    """
    #Load user data from db
    userFile = os.path.join(app.static_folder, 'users.json')
    with open(userFile) as user_file:
        data = json.load(user_file)
    users = data['data']

    #Track if user has been found
    found = False

    for i in range(0, len(users)):
        if users[i]['id'] == userID:
            found = True
            #Return found user
            return jsonify(users[i])

    #User not found, return error
    if not found:
        return json.dumps({'error': 'User not found'}), 404, {'ContentType':'application/json'}


@app.route('/api/users/add', methods=["POST"])
def addUser():
    """
    Takes in the data from the POST request made by the new user form and inserts data into users.json, redirect back to main page when done
    :param newUserFirstnameInput - new user's firstname
    :param newUserEmailInput - new user's email
    :return - redirect back to main page
    """
    #Get user data from form and create JSON object of new data
    requestData = request.form
    email = requestData['newUserEmailInput']
    firstName = requestData['newUserFirstnameInput']
    lastName = requestData['newUserLastnameInput']
    avatarURL = requestData['newUserAvatarURLInput']

    #Get current users and add the newUser object to the array and write to file
    userFile = os.path.join(app.static_folder, 'users.json')
    with open(userFile) as user_file:
        data = json.load(user_file)


    #Get next available ID
    currentIDs = []
    for i in range(0, len(data['data'])):
        currentIDs.append(data['data'][i]['id'])

    #Create new user object
    newUser = {
        "id": max(currentIDs) + 1,
        "email": email,
        "first_name": firstName,
        "last_name": lastName,
        "avatar": avatarURL
    }

    #Add new user to JSON file and increase total amount of users
    data['data'] = data['data'] + [newUser]
    data['total'] = len(data['data'])

    #Write new changes
    with open(userFile, 'w') as user_file:
        json.dump(data, user_file, indent=4)

    #Redirect to homepage
    return redirect(url_for('default'))


@app.route('/api/users/update', methods=["PUT"])
def updateUser():
    """
    Takes in the data from the PUT request made by the update user form and inserts new data into users.json, redirect back to main page when done
    :param updateUserIDInput - user's new ID
    :param updateUserEmailInput - user's new email
    :param updateUserFirstNameInput - user's new first name
    :param updateUserLastNameInput - users new last name
    :return - redirect back to main page
    """

    #Get new data from request
    requestData = request.form
    userID = requestData['updateUserIDInput']
    email = requestData['updateUserEmailInput']
    firstName = requestData['updateUserFirstNameInput']
    lastName = requestData['updateUserLastNameInput']
    avatarURL = requestData['updateUserAvatarURLInput']

    #Load user data from db
    userFile = os.path.join(app.static_folder, 'users.json')
    with open(userFile) as user_file:
        data = json.load(user_file)
    users = data['data']

    #Find user and write new information
    for user in users:
        if user['id'] == int(userID):
            user['email'] = email
            user['first_name'] = firstName
            user['last_name'] = lastName
            user['avatar'] = avatarURL
            print(user)

    data['data'] = users

    #Write new changes
    with open(userFile, 'w') as user_file:
        json.dump(data, user_file, indent=4)

    #Redirect to homepage
    return redirect(url_for('default'))


@app.route('/api/users/delete', methods=["DELETE"])
def deleteUser():
    """
    Takes in the user's id to be deleted, redirect back to main page when done
    :param deleteUserIDInput - user's ID
    :return - redirect back to main page
    """

    #Get new data from request
    requestData = request.form
    usersID = requestData['deleteUserIDInput']

    #Load user data from db
    userFile = os.path.join(app.static_folder, 'users.json')
    with open(userFile) as user_file:
        data = json.load(user_file)
    users = data['data']

    #Find user, if found make a new array without the index of the user and assign it to the JSON data
    for i in range(0, len(users)):
        if users[i]['id'] == int(usersID):
            newUsers = users[0:i]
            newUsers += users[i + 1:len(users)]

            data['data'] = newUsers
            data['total'] -= 1

    #Write new changes
    with open(userFile, 'w') as user_file:
        json.dump(data, user_file, indent=4)

    #Redirect to homepage
    return redirect(url_for('default'))


#This was enabled as I was getting a CORS error due to HTTPS.
@app.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    return response


if __name__ == '__main__':
    app.run(debug=True)