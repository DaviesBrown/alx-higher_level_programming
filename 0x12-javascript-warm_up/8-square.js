#!/usr/bin/node
const n = process.argv[2];
if (process.argv.length < 3 || !parseInt(n)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < n; i++) {
    console.log('x'.repeat(n));
  }
}
