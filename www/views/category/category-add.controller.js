(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('CategoryAddCtrl',['$scope','$stateParams', function ($scope,$stateParams) {
      $scope.title = '新增大分类';
      $scope.category = {
        ID: 0,
        Name: '',
        Children: [
          {
            ID: 0,
            Name: ''
          }
        ]
      };
      $scope.$on('$ionicView.enter', function () {
        $scope.category.Name = $stateParams.name;
        if ($stateParams.id != 0) {
          $scope.title = '新增小分类';
        }
      });
      $scope.addSubCategory = function () {
        $scope.category.Children.push({
          ID: 0,
          Name: ''
        });
      };
    }
    ]);
})();
