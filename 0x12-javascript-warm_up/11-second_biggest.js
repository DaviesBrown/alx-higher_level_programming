#!/usr/bin/node

if (process.argv.length <= 3) {
  console.log(0);
} else {
  const args = process.argv.slice(2);
  args.sort();
  const list = [];
  for (let i = 0; i < args.length; i++) {
    if (!list.includes(args[i])) {
      list.push(args[i]);
    }
  }
  console.log(list[list.length - 2]);
}
