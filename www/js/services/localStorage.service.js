/**
 * Created by Administrator on 2017/9/17.
 */
(function () {
  'use strict';
  angular.module('starter.services')
    .factory('localStorageService',function(){
      var service={};
      service.get=function(key,defaultValue){
        var val = localStorage.getItem(key);
        try{
          val = angular.fromJson(val);
        }
        catch(error){
          val = null;
        }
        if(defaultValue&&val===null){
          val = defaultValue;
        }
        return val;
      };
      service.add=function(key,value) {
        this.update(key, value);
      };
      service.update=function(key,value){
        if(value){
          localStorage.setItem(key,angular.toJson(value));
        }
      };
      service.delete=function(key){
        localStorage.removeItem(key);
      };
      return service;
    });
})();
