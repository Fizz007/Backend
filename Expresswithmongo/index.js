const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const app = express();

const userRoute = require('./src/routes/userroutes')
app.use(express.json());

require('../Expresswithmongo/connectdb')
app.use('/user', userRoute)

const PORT = process.env.PORT || 5600

app.listen(PORT, ()=> {
    console.log(`server starting on ${PORT}`)
})