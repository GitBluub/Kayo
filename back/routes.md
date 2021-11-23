

# /about.json

Returns the info request in the subject

# /auth/register

Needs
{
	username: ____
	password: ____
}

Creates a user in the database

Returns 200 Success
Returns 400 Bad Request

# /auth/login

Needs
{
	username: ____
	password: ____
}

Returns a jwt for the user
200
{
	"access_token": JWT_TOKEN
}

400 Bad Request

# GET /services

Returns the services the user is subscribed to

{
	subscriptions: [
		servicesNames...
	]
}


# GET /service/:name

Success
Returns the token used by the service
{
	token: "dazdazdaz"	
}

# GET /service/:name/url

Returns the url of the oauth2 connection needed
{
	url: "http;//facebook..."
	type: "Facebook" | "" | "Twitter"
}

# POST /service/:name

Subscribe to a service
{
	"serviceToken": _____
}


200
{
	"message": "Service created"
}

400 BadRequest

# DELETE /service/:name

Unsubscribe of a service

200
{
	"message": "Service deleted"
}

400 BadRequest
# GET /widgets

Returns all the widgets' id of the connected User

{
	"widgets": [
		widgetsIds...
	]
}

# GET /widget/:id

Return the widget fetched info

object returned by the service api
{

}

# GET /widget/:id/data

Return current widget info

{
	"name": "widget name",
	"parameters": [
		{
			"name": "parameter name",
			"value": "parameter value",
			"type": "string" | "number",
		},
	]
}

# POST /:serviceName/:widgetName

Creates a widget with necesarry info
{
	"parameters": [
		{
			"name": "parameter name",
			"value": "parameter value",
			"type": "string" | "number",
		},
	]
}

# PUT /widget/:id

Update a widget configuration
{
	"parameters": [
		{
			"name": "parameter name",
			"value": "parameter value",
			"type": "string" | "number",
		},
	]
}

# DELETE /widget/:id

Delete a widgets of a user

Return 200 Success
Return 400 BadRequest
