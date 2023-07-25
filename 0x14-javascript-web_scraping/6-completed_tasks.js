#!usr/bin/node
const request = require('request');
const url = process.argv[2];
request(url, (err, res, body) => {
  if (err) {
    console.log(err);
  }
  const result = JSON.parse(body);
  const obj = {};
  result.map((todo, i) => {
    if (todo.completed === true) {
      if (obj[todo.userId]) {
        obj[todo.userId] += 1;
      } else {
        obj[todo.userId] = 1;
      }
    }
    return i;
  });
  console.log(obj);
});
