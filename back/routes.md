
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
200
{
    "access_token": JWT_TOKEN
}

400 Bad Request

```json
{
    "username": "kayo",
    "password": "kayo_pwd"
}
```

- GET /services/subscribed

Returns the services the user is subscribed to

{
    subscriptions: [
    servicesNames...
    ]
}

- GET /services/unsubscribed
Returns the service the user is not subscribed to
[
    "serviceName_1",
    "serviceName_2",
]
- GET /service/:name

Returns the oauth token of the subscribed service

```json
{
    "serviceToken": "oauthToken1234"
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

Returns all the widgets' id of the connected User

```json
[
    {
        "serviceName": "spotify",
        "widgets": [
            {
                "id": "widgetId",
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

- GET /widget/:id

Return the widget fetched info

object returned by the service api
{

}

# GET /widget/:id/data

Return current widget info

```json
{
    "serviceName": "spotify",
    "widget_name": "favorite",
    "params": {
        "what": "artist",
    }
}
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
{
    "parameters": [
    {
        "name": "parameter name",
        "value": "parameter value",
        "type": "string" | "number",
    },
    ]
}

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
