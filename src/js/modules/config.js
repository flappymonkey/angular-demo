/**=========================================================
 * Module: config.js
 * 路由和资源配置
 =========================================================*/

angular.module('clickplus').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider',
function ($stateProvider, $locationProvider, $urlRouterProvider, helper) {
  'use strict';

  // 设置默认进入页面
  $urlRouterProvider.otherwise('/tag/list');

  // 
  // 路由设置
  // -----------------------------------   
  $stateProvider
    .state('tag', {
        url: '/tag',
        templateUrl: helper.basepath('tag.html'),
        controller: 'AppController'
    })
    .state('tag.list', {
        url: '/list',
        title: '我的全部标签',
        templateUrl: helper.basepath('tag-list.html'),
        controller: 'TagListController',
        resolve: helper.resolveFor('datatables')
    })
    .state('tag.import', {
        url: '/import',
        title: '导入标签',
        templateUrl: helper.basepath('tag-import.html'),
        controller: 'TagImportController',
        resolve: helper.resolveFor('fileupload')
    })
    .state('tag.add', {
        url: '/add',
        title: '新建标签',
        templateUrl: helper.basepath('tag-add.html'),
        controller: 'TagAddController',
        resolve: helper.resolveFor('ui.select', 'datetime')
    })
    .state('tag.edit', {
        url: '/edit/{tagid}',
        title: '修改标签',
        templateUrl: helper.basepath('tag-edit.html'),
        controller: 'TagEditController',
        resolve: helper.resolveFor('ui.select', 'datetime')
    })
    .state('people', {
        url: '/people',
        templateUrl: helper.basepath('people.html'),
        controller: 'AppController'
    })
    .state('people.list', {
        url: '/list',
        title: '我创建的人群',
        templateUrl: helper.basepath('people-list.html'),
        controller: 'PeopleListController',
        resolve: helper.resolveFor('datatables')
    })
    .state('people.add', {
        url: '/add',
        title: '新建营销人群',
        templateUrl: helper.basepath('people-add.html'),
        controller: 'PeopleAddController'
    })
    .state('people.edit', {
        url: '/edit/{id}',
        title: '修改营销人群',
        templateUrl: helper.basepath('people-edit.html'),
        controller: 'PeopleEditController'
    })
    ;


}]).config(['$ocLazyLoadProvider', 'APP_REQUIRES', function ($ocLazyLoadProvider, APP_REQUIRES) {
    'use strict';
    // LazyLoad 模块配置
    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
      modules: APP_REQUIRES.modules
    });

}]).config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', 
    function ( $controllerProvider, $compileProvider, $filterProvider, $provide) {
      'use strict';

      angular.module('clickplus').controller = $controllerProvider.register;
      angular.module('clickplus').directive  = $compileProvider.directive;
      angular.module('clickplus').filter     = $filterProvider.register;
      angular.module('clickplus').factory    = $provide.factory;
      angular.module('clickplus').service    = $provide.service;
      angular.module('clickplus').constant   = $provide.constant;
      angular.module('clickplus').value      = $provide.value;

}]).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {

    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.latencyThreshold = 500;
    cfpLoadingBarProvider.parentSelector = '.wrapper  section';

}]).config(['$tooltipProvider', function ($tooltipProvider) {

    $tooltipProvider.options({appendToBody: true});

}])
;
