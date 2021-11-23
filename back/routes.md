

# /about.json

Returns the info request in the subject

# /auth/register

Needs
{
	username: ____
	password: ____
}

Creates a user in the database

# /auth/login

Needs
{
	username: ____
	password: ____
}

Returns a jwt for the user

# GET /services

Returns the service the user is subscribed to

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

Returns all the widgets of the connected User

{
	"widgets": [
		widgetsIds...
	]
}

# GET /widget/:id

Return current widget info

{
	"name"	;
}

# POST /widget

Creates a widget with necesarry info
Maybe a /service/widget/:widgetname

# PUT /widget/:id

Update a widget configuration

# DELETE /widget/:id

Delete a widgets of a user

