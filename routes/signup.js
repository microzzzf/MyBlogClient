'use strict';

var Signup = require('../controllers/signup');

module.exports = function (app) {
  app.post('/signup', Signup.submit);
  app.post('/signup/verifyUsername', Signup.verifyUsername);
};