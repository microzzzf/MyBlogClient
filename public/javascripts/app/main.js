'use strict';

require.config({
  paths: {
    'angular': '../vendor/angular/angular/angular',
    'angular-route': '../vendor/angular/angular-route/angular-route'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular'],
      exports: 'ngRouteModule'
    }
  }
});

require([
  'angular',
  'javascripts/app/app.js', 
  'javascripts/app/modules/signup/module.js'
], function (angular) {
  angular.bootstrap(document, ['SuperBlog']);
});