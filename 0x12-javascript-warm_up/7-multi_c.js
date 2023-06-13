#!/usr/bin/node
const n = process.argv[2];
if (process.argv.length < 3 || !parseInt(n)) {
  console.log('Missing number of occurences');
} else {
  for (let i = 0; i < n; i++) {
    console.log('C is fun');
  }
}
