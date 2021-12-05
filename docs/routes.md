# Back-end Routes

## Server Status

### GET ```/health```

Responds 200 when the server is alive

### GET ```/about.json```

Returns main server information and a list of services supported by Kayo, as well as each of their widgets

```json
{
  "client ": {
    "host": "10.101.53.35"
  },
  "server ": {
    "current_time ": 1531680780 ,
    "services ": [
      {
        "name": "weather",
        "widgets ": [
          {
            "name": "city_temperature",
            "description ": "Display temperature for a city",
            "params ": [
              {
                "name": "city",
                "type": "string"
              }
            ]
          }
        ]
      }
    ]
  }  
}
```

## Authentication (at ```/auth```)

### POST ```/auth/register```

Registers a user in the data base.
On error, return 400 code

Expects the following request body:

```json
{
  "username": "JohnDoe",
  "password": "passw0rd",
}
```

### POST ```/auth/login```

Returns an access token for back-end API calls:

```json
{
  "access_token"
}
```

Expects the following request body:

```json
{
  "username": "JohnDoe",
  "password": "passw0rd",
}
```

## User management (at ```/```)

### GET ```/users```

If the authenticated user is an administrator, returns the list of Kayo users, with their id:

```json
[
  {
    "username": "firstUsername",
    "id": 1,
  },
  {
    "username": "secondUsername",
    "id": 2,
  }
]
```

Otherwise, an Unauthorized error code is returned

### DELETE ```/user/:id```

If the authenticated user is an administrator, deletes the user in the database with ```id``` as primary key

## Subscription management (at ```/service```)

### GET ```/available```

Returns a list of services the user can subscribe to (aka is not a subscriber of):

```json
[
  "serviceName1",
  "serviceName2",
]
```

### POST ```/:name```

Subscribe the user to the service named ```name```
The request body must have the following structure:

```json
{
  "serviceToken": "myServiceToken",
  "refreshToken": "myRefreshToken"
}
```

### GET ```/subscribed```

Returns a list of services the user is a subscriber of:

```json
[
  "subscribedServiceName1",
  "subscribedServiceName2",
]
```

### DELETE ```/:name```

Unsubscribe the user to the service named ```name```

## Widget Management (at ```/widget```, ```/widgets``` or ```/:serviceName```)

### POST ```/:serviceName/:widgetName```

Create the widget ```widgetName``` from ```serviceName``` for the user
The request body must hold parameters for the widget configuration:

```json
{
  "params": [
    {
      "name": "param1Name",
      "value": "param1Value",
    },
    {
      "name": "param2Name",
      "value": "param2Value",
    }
  ]
}
```

### Get ```/widget/available```

Returns an array of widgets the user can add (according to services they subscribed to)

```json
[
  {
    "serviceName": "firstService",
    "widgets": [
      {
        "name": "widgetName",
        "description": "I do this!",
        "params": [
          {
            "name": "param1Name",
            "value": "param1Value",
          },
        ]
      }
    ]
  }
]
```

### GET ```/widget/:id```

Returns information of the widget with id ```id```.
Will vary depending on the service and the widget.
For example, the Spotify widget for an Artist's top track:

```json
{
  "artistName": "Roland Crystal",
  "trackName": "Verduré",
  "albumName": "2020",
  "illustrationUrl": "spotify.albumillustration.com/..."
}
```

### DELETE ```/widget/:id```

Remove the user's widget with id ```id```

### GET ```/widgets```

Returns all widgets the user added.
Follow the format of GET ```/widget/:id```

### POST ```/widgets/reorder```

Reorder the user widgets.
The request body must have the following format:

```json
[
  widgetIdThatMustBeInTheFirstPosition,
  widgetIdThatMustBeInTheSecondPosition
]
```
