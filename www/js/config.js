/**
 * Created by Administrator on 2017/10/16.
 */
var appConfig={
  domain:'http://192.168.1.1/api',
  USER_KEY:'User'
};
(function () {
  'use strict';
  var appModule = angular.module('starter.services')
  appModule.constant('domain','http://192.168.1.1/api/');
  appModule.constant('pageSize',10);
  appModule.constant('UserKey','User');
  
})();
