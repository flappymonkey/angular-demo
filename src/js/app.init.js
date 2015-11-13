/*!
 * 
 * clickplus dmp
 * 
 * Author: shenbin
 * 
 */

if (typeof $ === 'undefined') { throw new Error('This application\'s JavaScript requires jQuery'); }

// APP START
// ----------------------------------- 

angular.module('clickplus', [
    'ngRoute',
    'ngAnimate',
    'ngStorage',
    'ngCookies',
    'ui.bootstrap',
    'ui.router',
    'oc.lazyLoad',
    'cfp.loadingBar',
    'ngSanitize',
    'ngResource'
  ]);

angular.module('clickplus').run(["$rootScope", "$state", "$stateParams",  '$window', '$templateCache', function ($rootScope, $state, $stateParams, $window, $templateCache) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$storage = $window.localStorage;

  // 全局变量设置
  // ----------------------------------- 
  $rootScope.app = {
    name: 'clikplus dmp',
    description: 'Angular Bootstrap Admin Template',
    year: ((new Date()).getFullYear()),
    layout: {
      isFixed: true,
      isCollapsed: false,
      isBoxed: false,
      isRTL: false,
      horizontal: false,
      isFloat: false,
      asideHover: false,
      theme: "app/css/theme-clickplus.css"
    },
    useFullLayout: false,
    hiddenFooter: false,
    viewAnimation: 'ng-fadeInUp'
  };
  $rootScope.user = {
    name:     'admin'
  };

  $rootScope.menuItems = [
      {
        "text": "我的标签",
        "sref": "tag.list"
      },{
        "text": "我的人群",
        "sref": "people.list"
      }
    ];
    
    // 检查菜单是否激活状态
    var isActive = function(item) {
      var top_state = item.sref.split(".");
      return $state.includes(top_state[0]);
    };
    
    $rootScope.getMenuItemPropClasses = function(item) {
      return (isActive(item) ? ' active' : '') ;
    };

}]);
