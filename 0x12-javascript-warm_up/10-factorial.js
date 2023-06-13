#!/usr/bin/node
function factorial (n) {
  return (n <= 1 || isNaN(n)) ? 1 : n * factorial(n - 1);
}
const n = parseInt(process.argv[2]);
console.log(factorial(n));
