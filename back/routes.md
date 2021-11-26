

# /about.json

Returns the info request in the subject
See subject

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

# GET /services/subscribed
Returns the service the user is subscribed to
[
	"service_name_1",
	"service_name_2",
]

# GET /services/unsubscribed
Returns the service the user is not subscribed to
[
	"service_name_1",
	"service_name_2",
]
# GET /service/:name

Returns the url of the oauth2 connection needed

{
	url: "https://spotify.api/authorize"
	type: "Spotify"
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
{
	[
		{
			"service_name": "spotify",
			"widgets: [widget_id_1, widget_id_2]
		}
	]
}

# GET /widget/:id

Return current widget info
{
	"service_name": "spotify",
	"widget_name": "favorite",
	"params": {
		"what": "artist"
	}
}

# POST /widget/add

Creates a widget with necesarry info
{
	"service_name": "spotify",
	"widget_name": "favorite",
	"params": {
		"what": "artist"
	}
}

# PUT /widget/:id

Update a widget configuration
{
	"params": {
		"what": "album"
	}
}

# DELETE /widget/:id

Delete a widgets of a user
