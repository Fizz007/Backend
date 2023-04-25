const path = require('path')
// console.log(path)

const dirName = path.dirname("F:\React\Node\info.js")
console.log('dirName', dirName )

const fileName = path.basename("F:\React\Node\info.js")
console.log('fileName', fileName)

const exName = path.extname("F:\React\Node\info.js")
console.log(exName)

const roothpath = 'F:\React\Node\Node\path.js';
const myModPath = path.join(roothpath, 'Node/mymodule.js')
console.log(myModPath)

const absPath = path.isAbsolute(roothpath)
console.log(absPath)

