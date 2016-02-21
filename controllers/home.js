'use strict';

exports.show = function (req, res) {
  res.render('index', {
    title: 'SuperBlog'
  });
};