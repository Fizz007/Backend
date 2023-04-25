const express  = require('express')
const router = express.Router();

const {getAllcontrollers, createProduct}= require('../controllers/productcontrollers')

router.route('/products').get(getAllcontrollers)
.post(createProduct)


// router.get('/products', (req, res)=> {
//   res.send('All product list')
// })

// router.get('/products/mobile', (req, res)=> {
//     res.send('All product mobile list')
// })

module.exports= router