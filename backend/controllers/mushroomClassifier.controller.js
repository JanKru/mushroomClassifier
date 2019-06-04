const Joi = require('joi');
const mushroomRequestJoi = require('../models/mushroomRequest.joi.model');
const mushroomClassifierRequestMongoose = require('../models/mushroomClassification.mongoose.model');

exports.classifyMushRoom = (req, res) => {
  console.log(req.body);
  Joi.validate(
      req.body,
      mushroomRequestJoi.schema,
      function(error, value) {
        if (error !== null) {
          res.status(400).json(error.details[0].message);
        } else {
          console.log('hih');
          const mushroomClassification = new mushroomClassifierRequestMongoose(
              value
          ).save();
          res.status(200).json(
              {
                originRequest: value,
                predictedValue: 2,
                poisonous: true}
          );
        }
      });
};
