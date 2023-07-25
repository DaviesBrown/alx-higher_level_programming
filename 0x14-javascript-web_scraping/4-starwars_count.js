#!usr/bin/node
const request = require('request');
const url = process.argv[2];
request(url, (err, res, body) => {
  if (err) {
    console.log(err);
  }
  const results = JSON.parse(body).results;
  const len = results.map(film => {
    return film.characters.filter(char => {
      return char.includes('18');
    }).length;
  });
  console.log(len.reduce((t, v) => t + v));
});
