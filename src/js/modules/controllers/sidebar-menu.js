/**=========================================================
 * Module: 二级导航
 =========================================================*/

angular.module('clickplus').controller('SidebarController', ['$rootScope', '$scope', '$state', '$http', '$timeout', 
  function($rootScope, $scope, $state, $http, $timeout){

    // 检查菜单是否激活状态
    var isActive = function(item) {

      if(!item) return;
      return $state.is(item.sref) || $state.includes(item.sref);
    };
    
    $scope.getMenuItemPropClasses = function(item) {
      return (isActive(item) ? ' active' : '') ;
    };

}]);
