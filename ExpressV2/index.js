const express = require('express')
const dotEnv = require('dotenv')
const productRoute = require('./routes/productRoutes')
const userRoute = require('./routes/userRoutes')
dotEnv.config();

const app = express();

const {checkLoginStatus, mid2}= require('./middleware')

// app.use(mid2)
app.use('/', productRoute)
// app.use('/', userRoute)

// app.get('/product', (req, res)=> {
//     res.send("prod page")
// })
// app.get('/profile',checkLoginStatus, (req, res)=> {
//     res.send("profile page")
// })
// app.get('/orders', (req, res)=> {
//     res.send("orders page")
// })


//Route

// app.route('/product/:id')
// .get((req, res)=> {
//     res.send('product page-- GET')
// })
// .put((req, res)=> {
//     res.send('product page-- PUT')
// })
// .patch((req, res)=> {
//     res.send('product page-- PATCH')
// })


// app.route('/profile')
// .get((req, res)=> {
//     res.send('product page-- GET')
// })
// .put((req, res)=> {
//     res.send('product page-- PUT')
// })
// .patch((req, res)=> {
//     res.send('product page-- PATCH')
// })

const PORT = process.env.PORT || 5600

app.listen(PORT, ()=> {
    console.log(`server starting on ${PORT}`)
})