/**=========================================================
 * Module: paginationFilter.js
 * 翻页数据过滤器
 =========================================================*/
angular.module('clickplus').filter('PaginationFilter', function() {
  return function(input, itemsPerPage, currentPage) {
    input = input || [];
    var inputLength = input.length;
    var out = [];
    var totalPageNum = inputLength%itemsPerPage == 0 ? inputLength/itemsPerPage :  Math.floor(inputLength/itemsPerPage) + 1;
    if(totalPageNum <= 1){
      for(var i = 0; i < inputLength; i++){
        out.push( input[i] );
      }
    }else if(totalPageNum == currentPage){
      for(var i = (currentPage-1)*itemsPerPage; i < inputLength; i++){
        out.push( input[i] );
      }
    }else{
      for(var i = (currentPage-1)*itemsPerPage, length = currentPage*itemsPerPage; i < length; i++){
        out.push( input[i] );
      }
    }
    return out;
  };
})