const express = require('express');
const router = express.Router();
const userEventCtrl = require('../controllers/user.controller')

router.post('/users/authentications', userEventCtrl.authenticate);
router.post('/users/regisstrations', userEventCtrl.register);

module.exports = router;
