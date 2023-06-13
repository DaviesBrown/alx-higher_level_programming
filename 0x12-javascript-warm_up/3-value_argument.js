#!/usr/bin/node
const length = process.argv.length;
if (length < 3) {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
