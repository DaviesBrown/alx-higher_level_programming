#!usr/bin/node
const request = require('request');
let id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;
request(url, (err, res, body) => {
    let people = JSON.parse(body).characters;
    console.log(people)
    let names = people.map(person => {
        request(person, (err, res, body) => {
            let p = JSON.parse(body);
            console.log(p.name);
        });
    });
});
