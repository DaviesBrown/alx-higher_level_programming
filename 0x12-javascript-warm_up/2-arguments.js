#!/usr/bin/node
let length = process.argv.length;
if (length < 3) {
    console.log("No argument");
} else if (length < 4) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}