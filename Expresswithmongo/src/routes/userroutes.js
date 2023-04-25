const express = require('express')
const {getAllUsers,createUser,getUserbyEmail,getUserbyAge} = require('../controllers/userController')

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:email', getUserbyEmail)
router.get('/', getUserbyAge)
router.post('/', createUser)

module.exports = router