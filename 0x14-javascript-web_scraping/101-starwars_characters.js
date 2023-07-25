#!usr/bin/node
const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;
request(url, (err, res, body) => {
  if (err) {
    console.log(err);
  }
  const people = JSON.parse(body).characters;
  people.map(person => {
    request(person, (err, res, body) => {
      if (err) {
        console.log(err);
      }
      const p = JSON.parse(body);
      console.log(p.name);
    });
    return person;
  });
});
