const mongoose = require('mongoose')


// used to connect node server with mongodb
// connect method returns a promise

mongoose.connect('mongodb://127.0.0.1:27017/NsFaizz')
.then(()=> {
console.log('connection db succesful')
})
.catch((err)=> {
    console.log(`Error: ${err.message}`)
})