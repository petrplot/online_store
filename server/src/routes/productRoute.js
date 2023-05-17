const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController.js');

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getByIdProduct);
router.post('/', ProductController.createProduct);
router.delete('/:id', ProductController.removeProduct);
router.put('/:id', ProductController.updateProduct);

module.exports = router;
