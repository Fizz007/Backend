const fs = require('fs');
fs.writeFileSync("read.txt", "hey wats up")
fs.appendFileSync("read.txt", "wanna leave")
const buf = fs.readFileSync("read.txt")
const data = buf.toString();
console.log(data)
fs.renameSync("read.txt", "readme.txt")
