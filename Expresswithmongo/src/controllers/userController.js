const User = require('../models/usermodel')


const getAllUsers = (req,res)=> {
    //to read all user

    console.log("getting data")
 User.find().then((data)=> {
    res.send(data)
 }).catch((err)=> {
    res.send(err)
 })

}

const createUser = (req, res)=> {
  console.log('create user' , req.body)
 // to create user
  User.create(req.body)
  .then((data)=> {
    console.log('data' , data)
    res.send('user createdd')

  })
  .catch((err)=> {
    console.log('error occured', err)
    res.send('something went wrong')
  })
}

const getUserbyEmail = (req, res)=> {
    console.log('email', req.params)
    const {email} = req.params
    // User.find({email})
    // .then((user)=> {
    //     console.log('user found')
    //   res.send(user)
    // })
    // for selecting specific object
    // User.find({email}).select({username:1, age:1})
    User.find({email}).select({username:1, age:1})
    .then((user)=> {
        console.log('user found')
      res.send(user)
    })
}
const getUserbyAge = (req, res)=> {
    console.log('query', req.query)
    // const {age} = req.params
    //return an array
    // User.find({age: req.query.age})
    // .then((user)=> {
    //     console.log('age found', user)
    //   res.send(user)
    // })

    //return an object
    // in case of multiple match return yu the first obj
    User.findOne({age: req.query.age})
    .then((user)=> {
        console.log('age found', user)
      res.send(user)
    })

    //   User.find({age: req.query.age}).select('username')
    // .then((user)=> {
    //     console.log('age found', user)
    //   res.send(user)
    // })
}


module.exports = {getAllUsers,createUser,getUserbyEmail,getUserbyAge}