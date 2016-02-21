'use strict';

exports.submit = function (req, res) {
  res.send({
    result: true
  });
};

exports.verifyUsername = function (req, res) {
  res.send({
    result: false
  });
};