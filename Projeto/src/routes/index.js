const express = require('express');
const router = express.Router();
const TempController = require('../controllers/index');
const usersController = require('../controllers/usersController');

router.post('/enviar', TempController.index);

router.get('/signup', usersController.create);
router.post('/signup', usersController.store);

module.exports = router;