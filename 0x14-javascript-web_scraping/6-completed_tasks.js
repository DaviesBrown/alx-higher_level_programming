#!usr/bin/node
const request = require('request');
let url = process.argv[2];
request(url, (err, res, body) => {
    let result = JSON.parse(body)
    let obj = {};
    let newl = result.map((todo, i) => {
        if (todo.completed === true) {
            if (obj[todo.userId]) {
                obj[todo.userId] += 1;
            } else {
                obj[todo.userId] = 1;
            }
        }
    });
    console.log(obj);
});