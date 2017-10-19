(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
   $scope.title=$stateParams.title;
   $scope.property=$stateParams.property;
    $scope.shop = localStorageService.get('Shop',{
      phone:'19971997',
      createTime:'2017-10-01 11:11:11',
      name:'',
      ab:'',
      boss:'',
      email:'',
      shopPhone:''
    });
    $scope.save=function () {
      localStorageService.update('Shop',$scope.shop);
    }
  }])
})()
