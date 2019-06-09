const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MushroomClassificationHistory = new Schema({
  originRequest: {},
  originRequestId: String,
  classificationResponse: {},
});

module.exports = mongoose.model('mushroomClassificationHistory', MushroomClassificationHistory);
