(function () {
'use strict';
  angular.module('starter.services')
    .factory('CategoryService',['$rootScope',function ($rootScope) {
      var service={};
      service.activeCategory={
        ID:5,
        Name:'默认类别'
      };
      service.updateCategory=function (value) {
        service.activeCategory=angular.copy(value);
        $rootScope.$broadcast('CategoryUpdate',service.activeCategory);
      };
      return service;
    }])
}());
