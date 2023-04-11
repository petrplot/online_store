const express = require('express') 
const router = express.Router()
const controller = require('../controllers/userController.js')

router.get('/', controller.getAllUsers)
router.get('/:id', controller.getByIdUser)
router.post('/logout', controller.logout)
router.post('/login', controller.login)
router.post('/reg', controller.registrationUser)
router.post('/refresh', controller.refreshToken)
router.delete('/:id', controller.removeUser)
router.put('/:id', controller.updateUser)

module.exports = router