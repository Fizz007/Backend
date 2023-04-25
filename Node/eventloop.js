console.log("I am the first")

const fs = require("fs")

console.log("I am the 2nd")

setTimeout(()=>{
    console.log("Timeout")
},0)

setImmediate(()=>{
    console.log("immediate")
})

fs.open('file.txt', (err)=> {
    console.log("opened succesfully")
})

process.nextTick(()=> {
    console.log("Caliing next tick")
})

Promise.resolve().then(()=> console.log("promise resolved"))

