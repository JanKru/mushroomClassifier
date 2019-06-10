'use strict';
const brain = require('brain.js');
const fs = require('fs');
const parse = require('csv-parse');
const logger = require('../config/log');
const csvRowParser = require('./csvRowParser');
const config = require('../config/config');
const currentMushroomClassifier = {
  trainDataPath: undefined,
  trainData: [],
  currentNN: undefined,
};

const metaNN = {
  nNconfig: {
    hiddenLayers: 200,
    iterations: 20000,
    errorThresh: 0.005,
    learningRate: 0.3,
    timeout: 1000,
  },
  nNInfo: {},
};

exports.setTrainDataPath = (pathToData) => {
  if (typeof pathToData === 'string' || pathToData instanceof String) {
    currentMushroomClassifier.trainDataPath = pathToData;
  } else {
    logger.warn('ERROR', pathToData instanceof String);
    throw new TypeError('pathToData must be typeof string');
  }
};

exports.learn = () => {
  if (typeof currentMushroomClassifier.trainDataPath !== 'undefined') {
    logger.info(
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
                csvRowParser.parseCsvRow(csvrow)
            );
          }).on('end', function() {
            const net = new brain.NeuralNetwork({
              hiddenLayers: config.nN.hiddenLayers,
            });
            net.trainAsync(currentMushroomClassifier.trainData, {
              iterations: config.nN.iterations,
              errorThresh: config.nN.errorThresh,
              learningRate: config.nN.learningRate,
              timeout: config.nN.timeout, // 150000
            }).then((res) => {
              currentMushroomClassifier.currentNN = net;
              /**
              const output = net.run(
                  currentMushroomClassifier.trainData[0].input
              );*/
              logger.info('NN info: %o', res);
              metaNN.nNInfo = res;
              if (res.iterations < 150) {
                logger.warn('number of Iterations is really low, maybe try again');
              }
              resolve(currentMushroomClassifier.currentNN);
            }).catch((err) => {
              reject(err);
            });
          });
    });
  } else {
    throw new Error('path to trainingData in unset - use setTrainDataPath(pathToTrainData)');
  }
};

exports.predict = (valueToPredict) => {
  return new Promise(function(resolve, reject) {
    if (typeof valueToPredict !== 'undefined') {
      const output = currentMushroomClassifier.currentNN.run(
          valueToPredict
      );
      resolve({
        output: output,
        metaNN: metaNN,
      });
    } else {
      reject(new Error('valueToPredict is undefined'));
    }
  });
};

exports.getCurrentMushroomClassifier = () => {
  return currentMushroomClassifier;
};

