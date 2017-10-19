angular.module('syzj.directives')
  .directive('companyDirective',[function () {
    return{
      restrict:'E',
      template:'<div style="position: fixed; bottom:{{bottom}};width:100%;height: 44px;text-align:center;">\
                 <h6 class="title">@2010-2017 生意专家</h6>\
                 </div>',
      replace:true,
      scope:{
        bottom:'@'
      }
    };
  }]);
