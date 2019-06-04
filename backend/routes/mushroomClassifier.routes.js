const express = require('express');
const router = express.Router(); 
const lockerEventCtrl = require('../controllers/lockerMsgEvent.controller');

router.post('/mushroomClassifier/', lockerEventCtrl.sendRegistrationActivationEmail);

module.exports = router;
