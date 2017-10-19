/**
 * Created by Administrator on 2017/10/13.
 */
angular.module('starter.services')
  .factory('popupService',['$timeout','$ionicPopup',function ($timeout,$ionicPopup) {
    var service={};
    service.toast=function (message) {
      var toast=angular.element('<div class="toast-container"></div>');
      toast.append('<div class="toast-message">' + message +'</div>');
      toast.on('webkitTransitionEnd',function () {
        if(!toast.hasClass('active')){
          toast.remove();
        }
      });
      angular.element(document.querySelector('body')).append(toast);
      toast.addClass('active');
      $timeout(function () {
        toast.removeClass('active');
      },3000);
    };
    service.alert=function (message) {
      var options={
        title:'警告'
        ,okText:'确定'
        ,template:'message'
        ,okType:'button-energized'
      };
      $ionicPopup.alert(options);
    };
    return service;
  }])
