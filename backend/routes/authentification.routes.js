const express = require('express');
const router = express.Router();
const userEventCtrl = require('../controllers/user.controller')

router.post('/users/authentications', userEventCtrl.authenticate);
router.post('/register', userEventCtrl.register);

module.exports = router;
