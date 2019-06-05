const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const userModelMongoose = require('../models/user.mongoose.model');


passport.use(
    new localStrategy({
      usernameField: 'email',
    },
    (username, password, done) => {
      userModelMongoose.findOne({
        email: username,
      },
      (err, user) => {
        if (err) {
          return done(err);
        }
        /** unknown user */
        else if (!user) {
          return done(null, false, {
            message: 'Email is not registered',
          });
        } else if (!user.verifyPassword(password)) {
          return done(null, false, {
            message: 'Wrong combination of email and password',
          });
        } else {
          return done(null, user);
        }
      });
    }
    )
);
