const Router = require ('express')
const router = new Router()
const userRout = require ('./userRout.js')


router.use('/user', userRout)

module.exports = router