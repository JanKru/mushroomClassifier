const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mushroomEventRoutes = require('../routes/mushroomClassifier.routes');
const userEventRoutes = require('../routes/authentification.routes');
const passport = require('passport');
const app = express();
require('./passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(passport.initialize());

app.use(mushroomEventRoutes);
app.use(userEventRoutes);

module.exports = app;
