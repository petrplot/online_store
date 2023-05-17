const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js');

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getByIdUser);
router.post('/logout', UserController.logout);
router.post('/login', UserController.login);
router.post('/reg', UserController.registrationUser);
router.post('/refresh', UserController.refreshToken);
router.delete('/:id', UserController.removeUser);
router.put('/:id', UserController.updateUser);

module.exports = router;
