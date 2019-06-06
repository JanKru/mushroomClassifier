const express = require('express');
const router = express.Router();
const mushroomEventCrtl = require('../controllers/mushroomClassifier.controller');

router.post('/mushroom_classifications', mushroomEventCrtl.classifyMushRoom);

module.exports = router;
