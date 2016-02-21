define(['javascripts/app/app.js'], function (superBlogModule) {
  'use strict';

  superBlogModule.controller('SignupController', function ($scope, $http, $location) {

    $scope.formData = {};
    $scope.verify = {};

    $scope.processForm = function () {
      $http({
        method: 'post',
        url: '/signup',
        data: $scope.formData,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
        .success(function (data) {
          console.log('now the data is:'+data);
          $location.path('/');
        });
    };

    $scope.verifyForm = function () {
      var parameters = ['username', 'email', 'password'];
      parameters.forEach(function (par) {
        $scope.verify(par);
      });
    };
    
    $scope.verify = function (parameter) {
      switch(parameter) {
        case 'username':
          $scope.verify.username = true;

          if($scope.verify.username && $scope.signupForm.username.$valid) {
            $http({
              method: 'post',
              url: '/signup/verifyUsername',
              data: $scope.formData.username,
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
              .success(function (data) {
                if(data.result) {
                  $scope.hasExisted = true;
                } else {
                  $scope.hasExisted = false;
                }
              });
          }
          break;
        case 'email':
          $scope.verify.email = true;
          break;
        case 'password':
          $scope.verify.password = true;
          break;
        default:
          break;
      }
    };

  });
});