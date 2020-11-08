const router = require('express').Router()

// controller imports
const { userController } = require('../controllers')

router.use('/user', userController)

module.exports = router

