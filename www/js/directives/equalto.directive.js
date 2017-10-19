/**
 * Created by Administrator on 2017/10/13.
 */
angular.module('syzj.directives')
  .directive('equalto',[function () {
return{
  restrict:'A',
  require:'ngModel',
  link:function (scope,element,attrs,ngModelCtrl) {

    function equalTo(viewValue) {

      var valid=(viewValue===scope.$eval(attrs.equalto));
      //console.log(valid);
      ngModelCtrl.$setValidity('equalto',valid);
      return valid?viewValue:undefined;
    };
    ngModelCtrl.$parsers.unshift(equalTo);
  }
};
  }]);
