const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoryController.js');

router.get('/', controller.getAllCategories);
router.get('/:id', controller.getByIdCategory);
router.post('/', controller.createCategory);
router.delete('/:id', controller.removeCategory);
router.put('/:id', controller.updateCategory);

module.exports = router;
