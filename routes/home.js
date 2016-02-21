'use strict';

var Home = require('../controllers/home');

module.exports = function (app) {
  app.get('/', Home.show);
};
