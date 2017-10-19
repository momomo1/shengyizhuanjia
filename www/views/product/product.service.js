(function () {
  'use strict';
  angular.module('starter.services')
    .factory('productService',['$http','domain',function ($http,domain) {
      var url =domain+'product';
      var service={};
      service.getList= function (pageIndex,pageSize) {
        return $http({
          method:'GET',
          url:'url',
          params:{
            index:pageIndex,
          size:pageSize
          }
        })
      };
      service.getById = function (id) {

      };
      service.add=function (product) {
        return $http.post(url,product);
      };
      service.update=function (product) {
        return $http.put(url,product);
      };
      service.delete=function (product) {
        return $http.delete(url + '/' +id);
      };
      service.getByCategoryID=function (product) {

      };
      return service;
    }])
})()
