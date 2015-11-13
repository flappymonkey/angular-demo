/**=========================================================
 * Module: paginationFilter.js
 * 显示选中网站的网站名
 =========================================================*/
angular.module('clickplus').filter('showSiteName', function() {
  return function(sites) {
    sites = sites || [];
    var  siteNames = [];
    for(var i = 0, length = sites.length; i < length; i++){
      if( sites[i]['selected'] ){
        siteNames.push( sites[i]['site_name'] );
      }
    }
    if(siteNames.length == 0){
      return '网站(可多选)';
    }
    return siteNames.join("+");
  };
})