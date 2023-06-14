#!/usr/bin/node

if (process.argv.length <= 3) {
  console.log(0);
} else {
  const args = process.argv.slice(2);
  console.log(args.sort()[args.length - 2]);
}
