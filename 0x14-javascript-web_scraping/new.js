#!/usr/bin/node
ll = [
    {
    "name": "Luke Skywalker", 
    "height": "172", 
    "mass": "77", 
    "hair_color": "blond", 
    "skin_color": "fair", 
    "eye_color": "blue", 
    "birth_year": "19BBY", 
    "gender": "male", 
    "homeworld": "https://swapi-api.alx-tools.com/api/planets/1/", 
    "films": [
        "https://swapi-api.alx-tools.com/api/films/1/", 
        "https://swapi-api.alx-tools.com/api/films/2/", 
        "https://swapi-api.alx-tools.com/api/films/3/", 
        "https://swapi-api.alx-tools.com/api/films/6/", 
        "https://swapi-api.alx-tools.com/api/films/7/"
    ]
},
{
    "name": "C-3PO", 
    "height": "167", 
    "mass": "75", 
    "hair_color": "n/a", 
    "skin_color": "gold", 
    "eye_color": "yellow", 
    "birth_year": "112BBY", 
    "gender": "n/a", 
    "homeworld": "https://swapi-api.alx-tools.com/api/planets/1/", 
    "films": [
        "https://swapi-api.alx-tools.com/api/films/1/", 
        "https://swapi-api.alx-tools.com/api/films/2/", 
        "https://swapi-api.alx-tools.com/api/films/3/", 
        "https://swapi-api.alx-tools.com/api/films/4/", 
        "https://swapi-api.alx-tools.com/api/films/5/", 
        "https://swapi-api.alx-tools.com/api/films/6/"
    ]
}
]
cc = ll.map(f => f.name)
console.log(cc)