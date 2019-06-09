const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mushroomClassificationHistory = new Schema({
  originRequest: {},
  classificationResponse: {},
});

module.exports = mongoose.model('mushroomClassificationHistory', mushroomClassificationHistory);
