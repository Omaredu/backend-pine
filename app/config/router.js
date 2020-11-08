const router = requrie('express').Router()

// controller imports
const { userController } = require('../controllers')

router.use('user', userController)

module.exports = router

