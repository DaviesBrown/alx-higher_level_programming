#!/usr/bin/node
const list = process.argv.slice(2);
if (process.argv.length < 4) {
  console.log(0);
} else {
  console.log(list.sort()[list.length - 2]);
}
