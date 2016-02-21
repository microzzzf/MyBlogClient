define(['angular', 'angular-route'], function (angular) {
  'use strict';
  
  return angular.module('SuperBlog', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<p>test</p>'
        })
        .when('/signup', {
          templateUrl: 'javascripts/app/modules/signup/signup.html',
          controller: 'SignupController'
        });
    });
});