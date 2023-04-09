const express = require('express') 
const router = express.Router()
const userRout = require ('./userRout.js')
const productRout = require('./productRout.js')
const categoriesRout = require('./categoriesRout.js')


router.use('/user', userRout)
router.use('/product', productRout)
router.use('/categories', categoriesRout)

module.exports = router