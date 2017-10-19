
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('SettingCtrl',['$scope','$ionicHistory','$state','localStorageService',function ($scope,$ionicHistory,$state,localStorageService) {
      $scope.goBack=function () {
        $ionicHistory.nextViewOptions({
          disableBack:true
        });
        $state.go('app.Home')
      };
      $scope.shop={
        shopPhone:'19971997'
      };
      $scope.callPhone=function () {
        location.href='tel:' + $scope.shop.shopPhone;
      };
      $scope.login=function () {
        var account = localStorageService.get('User')
          account.isLogin=false;
          localStorageService.update('User',account);
          $state.go('app.Home')
      }
    }]);
})();
