#!/usr/bin/node
const fs = require('fs');

const readme = fs.readFileSync(process.argv[2], 'utf-8');
console.log(readme);
