const express = require('express') 
const router = express.Router()
const controller = require('../controllers/userController.js')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/logout', controller.logout)
router.post('/login', controller.login)
router.post('/reg', controller.reg)
router.post('/refresh', controller.refresh)
router.delete('/:id', controller.remove)
router.put('/:id', controller.update)

module.exports = router