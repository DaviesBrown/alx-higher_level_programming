#!usr/bin/node
const request = require('request');
let url = process.argv[2];
request(url, (err, res, body) => {
    let results = JSON.parse(body).results;
    let len = results.map(film => {
        return film.characters.filter(char => {
            return char.includes('18');
        }).length;
    })
    console.log(len.reduce((t, v) => t + v));
});