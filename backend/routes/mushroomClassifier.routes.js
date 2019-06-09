const express = require('express');
const router = express.Router();
const mushroomEventCrtl = require('../controllers/mushroomClassifier.controller');

router.post('/mushroom_classifications', mushroomEventCrtl.classifyMushRoom);
router.get('/mushroom_classifications', mushroomEventCrtl.getMushroomClassifications);

module.exports = router;
