# Back-end Routes

## Server Status

### ```/health```

Responds 200 when the server is alive

### ```/about.json```

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

## Authentification (at '/auth')

### ```/auth/register```

Registers a user in the data base.
On error, return 400 code

Expects the following request body:

```json
{
  "username": "JohnDoe",
  "password": "passw0rd",
}
```

### ```/auth/login```

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
