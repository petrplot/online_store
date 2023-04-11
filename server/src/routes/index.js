const express = require('express') 
const router = express.Router()
const userRoute = require ('./userRoute.js')
const productRoute = require('./productRoute.js')
const categoriesRoute = require('./categoriesRoute.js')


router.use('/user', userRoute)
router.use('/product', productRoute)
router.use('/categories', categoriesRoute)

module.exports = router