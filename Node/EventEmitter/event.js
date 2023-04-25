const event = require('events')

const Login = new event(); // E.emitter Object
const Signup = new event();

//Registering an event
// Login.addListener('success', (username,country)=> {
//     console.log(`${username} loggedin Succesfully  from ${country}`)
// })

// Login.emit('success', 'faisal', 'india')
// Login.on('success', ()=> {
//     console.log('sucess event registered')
// })

//Raiseing an event
// Login.emit('success', 'faisal', 'india')
const sign1 = (data)=> {
    console.log(`hi this is me ${data} `)
}
const sign2 = (data)=> {
    console.log(`hi this is me ${data} `)
}
Signup.on('success', sign1 )
Signup.on('success', sign2 )

Signup.once('success', ()=> {
    console.log("only once")
})

Signup.emit('success', "faisal")
Signup.emit('success', "Faizz")
// Signup.removeAllListeners('success', sign1)
// Signup.off('success', sign1)
// Signup.removeAllListeners('success')
// Signup.emit('success', "faisal")

console.log(Signup.listenerCount('success'));