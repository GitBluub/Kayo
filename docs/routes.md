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
}```

## Authentification
