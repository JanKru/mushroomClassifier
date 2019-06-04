'use strict';
const brain = require('brain.js');
const fs = require('fs');
const parse = require('csv-parse');
const logger = require('../config/log');
const csvAttributeParser = require('./csvAttributeParser');
const currentMushroomClassifier = {
  trainDataPath: undefined,
  trainData: [],
};


exports.setTrainDataPath = (pathToData) => {
  if (typeof pathToData === 'string' || pathToData instanceof String) {
    currentMushroomClassifier.trainDataPath = pathToData;
  } else {
    console.log('ERROR', pathToData instanceof String);
    throw new TypeError('pathToData must be typeof string');
  }
};

exports.learnAndPredict = () => {
  if (typeof currentMushroomClassifier.trainDataPath !== 'undefined') {
    logger.warn(
        'the neural network is just learning that may take some time (max. 1 min => timeout)'
    );
    // TODO: Cross-validation would be a good idea
    return new Promise(function(resolve, reject) {
      fs.createReadStream(currentMushroomClassifier.trainDataPath)
          .pipe(parse({
            columns: true,
            trim: true,
            skip_empty_lines: true,
          })).on('data', function(csvrow) {
            currentMushroomClassifier.trainData.push(
                csvAttributeParser.parseCsvRow(csvrow)
            );
          }).on('end', function() {
            const net = new brain.NeuralNetwork({
              hiddenLayers: [200],
            });
            net.trainAsync(currentMushroomClassifier.trainData, {
              iterations: 20000,
              errorThresh: 0.005,
              learningRate: 0.4,
              timeout: 180000,
            }).then((res) => {
              const output = net.run(
                  currentMushroomClassifier.trainData[0].input
              );
              logger.info('NN is trained result for data[0] %o', output);
              logger.info('NN info: %o', res);
              if (res.iterations < 150) {
                logger.warn('number of Iterations is really low, maybe try again');
              }
              resolve(output);
            }).catch((err) => {
              reject(err);
            });
          });
    });
  } else {
    throw new Error('path to trainingData in unset - use setTrainDataPath(pathToTrainData)');
  }
};

exports.getCurrentMushroomClassifier= () => {
  return currentMushroomClassifier;
};

