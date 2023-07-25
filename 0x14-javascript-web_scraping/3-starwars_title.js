#!usr/bin/node
const request = require('request');
let id = process.argv[2];
let url = `https://swapi-api.alx-tools.com/api/films/${id}`;
request(url, (err, res, body) => {
    console.log(JSON.parse(body).title);
});