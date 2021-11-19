

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

# GET /service/:name

Returns the url of the oauth2 connection needed

{
	url: "dazdaz"
	type: "Facebook" | "" | "Twitter"
}

# POST /service/:name

Subscribe to a service
{
	"serviceToken": _____
}

# DELETE /service/:name

Unsubscribe of a service

# GET /widgets

Returns all the widgets of the connected User

# GET /widget/:id

Return current widget info

# POST /widget

Creates a widget with necesarry info
Maybe a /service/widget/:widgetname

# PUT /widget/:id

Update a widget configuration

# DELETE /widget/:id

Delete a widgets of a user

