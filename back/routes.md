
# KAYO - Back-end routes documentation

- /about.json

Returns the info request in the subject
See subject

- /auth/register

Needs
Creates a user in the database

```json
{
    "username": "kayo",
    "password": "kayo_pwd"
}
```

- /auth/login
Returns a jwt for the user

```json
{
    "username": "kayo",
    "password": "kayo_pwd"
}
```

- GET /services/subscribed

Returns the service the user is subscribed to

```json
[
    "service_name_1",
    "service_name_2",
]
```

- GET /services/unsubscribed
Returns the service the user is not subscribed to
[
    "service_name_1",
    "service_name_2",
]
- GET /service/:name

Returns the url of the oauth2 connection needed

```json
{
    url: "https://spotify.api/authorize",
    type: "Spotify"
}
```

- POST /service/:name

Subscribe to a service

```json
{
    "serviceToken": "oauthToken1234"
}
```

- GET /services/widgets
Returns a list of widgets the user can subscribe to 
[
    {
        "name": "spotify",
        "widgets": [
            {
                "name": "widget1",
                "desc": "blabla"
                "params [
                    {
                        "name": "param1",
                        "value": "string"
                    },
                ]
            }
        ]
    }
]

- DELETE /service/:name

Unsubscribe of a service

- GET /service/:name/widgets

- GET /widgets

Returns all the widgets of the connected User

```json
[
    {
        "service_name": "spotify",
        "widgets": [
            {
                "id": "widgetid",
                "name": "widget1",
                "desc": "blabla",
                "params": [
                    {
                        "name": "param1",
                        "value": "actual",
                    },
                ]
            }
        ]
    }
]
```

- POST /service/:servicename/:widgetname

Creates a widget with necesarry info

```json
{
    "params": [
        {
            "name": "param1",
            "value": "actual",
        },
    ]
}
```

- PUT /widget/:id

Update a widget configuration

```json
{
    "params": [
        {
            "name": "param1",
            "value": "actual",
        },
    ]
}
```

- DELETE /widget/:id

Delete a widgets of a user
