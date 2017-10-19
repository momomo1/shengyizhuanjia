(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductLoading',['$scope','$ionicLoading','$filter','$timeout',function ($scope,$ionicLoading,$filter,$timeout) {
      $scope.products=[];
      $scope.sourceProducts = [];
      $scope.searchMV={
        content:''
      };
      $scope.hasMore=true;
      var isLoading = false;
      var pageIndex = 1;
      $scope.$on('$ionicView.enter',function () {
       $ionicLoading.show({
         template:'<ion-spinner icon="ios" class="spinner-list"></ion-spinner>数据加载中，请稍后......'
       });
        $scope.doRefresh();
      });
      $scope.getByNaem=function () {
        $scope.products = $filter('filter')($scope.sourceProducts,{
          Name:$scope.searchMV.content
        });
      };
      $scope.doRefresh = function () {
        pageIndex=1;
        $scope.hasMore=true;
        $scope.products=[];
        loadData();
      };
      $scope.loadMore=function () {
        pageIndex++;
        loadData();
      };
      function  loadData() {
        if (isLoading == true) {
          return;
        }
        isLoading = true;
        $timeout(function () {
          var list = [
            {
              ID: 1
              , Images: ['views/product/images/1.jpg']
              , Name: 'iphone7'
              , Price: '4999'
              , Store: 12
              , Barcode: '1212121212112'
            }
            , {
              ID: 2
              , Images: ['views/product/images/2.jpg']
              , Name: 'Note7'
              , Price: '5555'
              , Store: 120
              , Barcode: '1212121211524'
            }
            , {
              ID: 3
              , Images: ['views/product/images/3.jpg']
              , Name: 'MIX'
              , Price: '1234'
              , Store: 51
              , Barcode: '65446546554'
            }
            , {
              ID: 4
              , Images: []
              , Name: 'MI'
              , Price: '1234'
              , Store: 25
              , Barcode: '654654634354'
            }
            , {
              ID: 5
              , Images: []
              , Name: 'MI2'
              , Price: '1111'
              , Store: 20
              , Barcode: '546465654465'
            }
            , {
              ID: 6
              , Images: []
              , Name: 'MI5'
              , Price: '1000'
              , Store: 25
              , Barcode: '654654634354'
            }
            , {
              ID: 7
              , Images: []
              , Name: 'Huawei1'
              , Price: '1111'
              , Store: 20
              , Barcode: '546465654465'
            }
          ];
          $scope.products=$scope.products.concat(list);
          $scope.sourceProducts=angular.copy($scope.products);
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');
          $ionicLoading.hide();
          isLoading=false;
          if(pageIndex==3){
            $scope.hasMore=false;
          }
        }, 3000);
      }
    }]);
})();
