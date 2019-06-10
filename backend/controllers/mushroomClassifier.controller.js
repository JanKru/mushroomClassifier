const Joi = require('joi');
const mushroomRequestJoi = require('../models/mushroomRequest.joi.model');
const MushroomClassifierRequestMongoose = require('../models/mushroomClassification.mongoose.model');
const MushroomClassificationHistory = require('../models/mushroomClassificationHistroy.mongoose.model');
const mushroomClassifier = require('../mushroomClassifier/mushroomClassifier');
const logger = require('../config/log');
const config = require('../config/config');

const testMushroom = {
  cap_shape: 'b',
  cap_surface: 'f',
  cap_color: 'n',
  bruises: 't',
  odor: 'a',
  gill_attachment: 'a',
  gill_spacing: 'c',
  gill_size: 'b',
  gill_color: 'k',
  stalk_shape: 'e',
  stalk_root: 'b',
  stalk_surface_above_ring: 'f',
  stalk_surface_below_ring: 'y',
  stalk_color_above_ring: 'n',
  stalk_color_below_ring: 'n',
  veil_type: 'p',
  veil_color: 'n',
  ring_number: 'n',
  ring_type: 'c',
  spore_print_color: 'k',
  population: 'a',
  habitat: 'g',
};

exports.classifyMushRoom = (req, res) => {
  Joi.validate(
      req.body,
      mushroomRequestJoi.schema,
      function(error, value) {
        if (error !== null) {
          res.status(400).json(error.details[0].message);
        } else {
          logger.debug(testMushroom, '%o testmushroom');

          const classificationReq = new MushroomClassifierRequestMongoose(
              value
          );
          let requestId;
          classificationReq.save(function(err, classificationRequest) {
            requestId = classificationRequest._id;
            const transformedClassificationReq =
            classificationReq.getNumberRepresentation(
                classificationReq.mushroomParameter
            );

            mushroomClassifier.predict(transformedClassificationReq).then(
                (response) => {
                  let poisonous = true;
                  if ((response.output.class*100) > config.threshholdToBePoisonous) {
                    poisonous = true;
                  } else {
                    poisonous = false;
                  }
                  const classificationHistory =
                    new MushroomClassificationHistory({
                      originRequest: value,
                      originRequestId: requestId,
                      classificationResponse: {
                        predictedValue: response.output.class * 100,
                        metaNN: response.metaNN,
                        poisonous: poisonous,
                      },
                    });
                  classificationHistory.save();
                  res.status(200).json(
                      {
                        originRequest: value,
                        predictedValue: response.output.class * 100,
                        metaNN: response.metaNN,
                        poisonous: poisonous,
                      }
                  );
                }).catch((err) => {
              res.status(500).json(err);
            });
          });
        }
      });
};

exports.getMushroomClassifications = (req, res) => {
  MushroomClassificationHistory.find({}).then(function(classifications) {
    res.send(classifications);
  }, function(err) {
    res.status(500).json(err);
  });
  /**
  mushroomClassificationHistory.find({}, function(err, classifications) {


    res.send(classifications);
  });*/
};
