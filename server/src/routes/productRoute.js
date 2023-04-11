const express = require('express') 
const router = express.Router()
const controller = require('../controllers/productController.js')

router.get('/', controller.getAllProducts)
router.get('/:id', controller.getByIdProduct)
router.post('/', controller.createProduct)
router.delete('/:id', controller.removeProduct)
router.put('/:id', controller.updateProduct)

module.exports = router