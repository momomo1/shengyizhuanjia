/**
 * Created by Administrator on 2017/9/25.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('CategoryListCtrl',['$scope',function ($scope) {
    $scope.categories = [
      {
        ID:1,
        Name:'电脑整机',
        Children:[
          {
            ID:5,
            Name:'笔记本',
            Children:[]
          },
            {
              ID:6,
              Name:'台式机',
              Children:[]
            },
            {
              ID:7,
              Name:'平板电脑',
              Children:[]
            }
        ]
      },
      {
        ID:2,
        Name:'电脑配件',
        Children:[
          {
            ID:8,
            Name:'CPU',
            Children:[]
          },
          {
            ID:9,
            Name:'内存',
            Children:[]
          }
        ]
      },
      {
        ID:3,
        Name:'外设产品',
        Children:[
          {
            ID:10,
            Name:'鼠标',
            Children:[]
          },
          {
            ID:11,
            Name:'键盘',
            Children:[]
          },
          {
            ID:12,
            Name:'U盘',
            Children:[]
          }
        ]
      },
      {
        ID:4,
        Name:'网络产品',
        Children:[
          {
            ID:13,
            Name:'路由器',
            Children:[]
          },
          {
            ID:14,
            Name:'交换机',
            Children:[]
          },
          {
            ID:15,
            Name:'网卡',
            Children:[]
          },
          {
            ID:16,
            Name:'网络配件',
            Children:[]
          }
        ]
      },
      {
        ID:5,
        Name:'默认分类',
        Children:[]
      }
    ];
    $scope.activateCategory = {};
    //$scope.activateSubCategory = {};
    if($scope.categories.length >0){
      $scope.activateCategory = $scope.categories[0];
    }

    $scope.selectCategory = function (index) {
      if($scope.activateCategory.ID !=$scope.categories[index].ID){
        $scope.activateCategory = $scope.categories[index];
      }
    };

    $scope.selectSubCategory = function (data) {
      console.log(data);
      $scope.activateSubCategory = data;
      $ionicHistory.goBack();
    };

    $scope.showActiveSheet = function () {
      $ionicActionSheet.show({
       buttons:[
         {
           text:'<b>新增小分类</b>'
         },
         {
           text:'编辑分类'
         }
       ],
        cancelText:'取消',
        buttonClicked:function (index) {
          switch (index){
            case 0:
                  $scope.gotoCategoryAdd();
                      break;
            case  1:
                  
                  break;
          }
        },
        titleText:'更多操作'
      });
    };
    $scope.gotoCategoryAdd = function () {
      location.href = '#/app/category-add/' + $scope.activateCategory.ID + '/' + $scope.activateCategory.Name;
    }
  }]);
})();
