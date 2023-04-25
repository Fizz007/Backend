const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password:String,
    email:String,
    age:Number,
},{versionKey:false})

//first arg-- name of the collection
//2nd arg -- schema we created
const User = mongoose.model("user", userSchema)

module.exports = User
