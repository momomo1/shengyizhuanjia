/**
 * Created by Administrator on 2017/9/19.
 */
(function () {
  'use striet';
  angular.module('starter.controllers')
    .controller('LoginCtrl' ,['$scope','localStorageService','$ionicPopup','$state',function ($scope,localStorageService,$ionicPopup,$state) {
      var USER_KEY='User';
      $scope.user={
        username:'',
        password:''
      };
      $scope.login=function () {
        var account = localStorageService.get(USER_KEY,{
          username:'zyt',
          password:'111'
        });
        if(account.username===$scope.user.username && account.password===$scope.user.password){
         account.isLogin=true;
          localStorageService.update(USER_KEY,account);
          $state.go('app.Home')
        }
        else {
         $ionicPopup.alert({
            title:'警告',
            template:'用户名错误或者密码不正确',
            okText:'确定',
          okType:'button-energized'
          });
        }
      };
    }]);
})();

