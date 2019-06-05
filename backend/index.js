const config = require('./config/config');
const app = require('./config/express');
const logger = require('./config/log');

/** own created modules */
const mushroomClassifier = require('./mushroomClassifier/mushroomClassifier');

mushroomClassifier.setTrainDataPath('./mushroomClassifier/mushrooms.csv');
mushroomClassifier.learn().then((res) => {
  // module.parent check is required to support mocha watch
  // src: https://github.com/mochajs/mocha/issues/1912
  if (!module.parent) {
    app.listen(config.port, () => {
      logger.info(`server started on port ${config.port} (${config.env})`);
    });
    require('./config/mongoose');
    // console.log(mushroomClassifier.predict(), 'from index');
  }
}, function(error) {
  logger.warn('Failed!', error);
});

module.exports = app;
