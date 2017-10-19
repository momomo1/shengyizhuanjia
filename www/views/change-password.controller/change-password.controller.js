(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ChangePasswordCtrl',['$scope','localStorageService','$ionicPopup','popupService',function ($scope,localStorageService,$ionicPopup,popupService) {
      $scope.user={
        oldPassword:'',
        password:'',
        confirmPassword:''
      };
      $scope.save = function () {
        popupService.toast('laji');
        popupService.alert('2B');
        console.log(changePasswordForm.$valid);
        if(changePasswordForm.$valid){
          console.log('save');
          popupService.toast('2B')
        }
      }
      $scope.save =function () {
        var account = localStorageService.get('User')
        if (account.password === $scope.user.oldPassword && $scope.user.password===$scope.user.confirmPassword) {
          account.password=$scope.user.password;
          localStorageService.update('User', account);
        }
        else {
          $ionicPopup.alert({
            title: '警告',
            template: '密码不正确',
            okText: '确定',
            okType: 'button-energized'
          });
        }
      }
    }])

})()
