require.config({
  paths: {
    'angular': '../vendor/angular/angular/angular'
  },

  shim: {
    angular: {
      exports: 'angular'
    }
  }
});

require([
  'angular',
  './app'
], function (angular) {
  
});