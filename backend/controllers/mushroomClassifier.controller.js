const Joi = require('joi');
const mushroomRequestJoi = require('../models/mushroomRequest.joi.model');
const mushroomClassifierRequestMongoose = require('../models/mushroomClassification.mongoose.model');
const mushroomClassifier = require('../mushroomClassifier/mushroomClassifier');
const logger = require('../config/log');

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
  console.log(mushroomClassifier.getCurrentMushroomClassifier().trainData[0]);
  Joi.validate(
      req.body,
      mushroomRequestJoi.schema,
      function(error, value) {
        if (error !== null) {
          res.status(400).json(error.details[0].message);
        } else {
          logger.debug(testMushroom, '%o testmushroom');
          const classificationReq = new mushroomClassifierRequestMongoose(
              value
          );
          console.log(classificationReq.getNumberRepresentation(classificationReq.mushroomParameter), 'TRANSFORMATION');

          const transformedClassificationReq =
          classificationReq.getNumberRepresentation(
              classificationReq.mushroomParameter
          );
          mushroomClassifier.predict(transformedClassificationReq).then(
              (response) => {
                logger.info('req %o', response);
                res.status(200).json(
                    {
                      originRequest: value,
                      test: 23235,
                      predictedValue: response.class,
                    }
                );
              }).catch((err) => {
            console.log(err);
          });
        }
      });
};
