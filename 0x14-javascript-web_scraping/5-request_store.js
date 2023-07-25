#!usr/bin/node
const fs = require('fs');
const request = require('request');
let url = process.argv[2];
let file = process.argv[3];
request(url, (err, res, body) => {
    fs.writeFileSync(file, body, encoding='utf-8');
});