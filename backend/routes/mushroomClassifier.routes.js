const express = require('express');
const router = express.Router(); 
const mushroomEventCrtl = require('../controllers/mushroomClassifier.controller');

router.post('/mushroomClassifier', mushroomEventCrtl.classifyMushRoom);

module.exports = router;
