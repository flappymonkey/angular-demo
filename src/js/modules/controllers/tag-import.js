/**=========================================================
 * Module:  文件上传
 * 该模块只是临时的解决方案，直接使用jquery操作dom元素了，违背了angular的原则，后续需要修改
 * 
 =========================================================*/

angular.module('clickplus').controller('TagImportController', ['$scope', '$http',  function($scope, $http) {
    
    // 状态
    $scope.loading = false;
    $scope.tips = "暂无文件，请根据数据规范，按格式编辑上传";

    // view中使用到的方法
    $scope.upload = upload;


    function upload(){
        var filename = $("#fileToUpload").val();
        var ext = filename.split('.')[ filename.split('.').length - 1 ];
        if(ext != "csv" && ext != "txt"){
            alert("请选择cvs或者txt文件");
            return false;
        }
        $("#fileToUpload")[0].disabled = true;
        $("#fileToUploadLabel").addClass("disabled");
        $("#uploadTips").text( "文件正在上传中..." );
        ajaxFileUpload();
    } 

    function ajaxFileUpload() {
        $.ajaxFileUpload({
            url: '/file/upload',
            secureuri: false,
            fileElementId: 'fileToUpload',
            dataType: 'json',
            data: {},
            success: function(data, status) {
                if (typeof(data.status) != 'undefined') {
                    if (data.status == 'success') {
                        $("#uploadTips").text( "文件上传成功！" );
                    } else{
                        $("#fileToUpload").val("");
                        if (typeof(data.message) != 'undefined') {
                            alert(data.message);
                        }else {
                            alert("上传错误！");
                        }
                        $("#fileToUpload")[0].disabled = false;
                        $("#fileToUploadLabel").removeClass("disabled");
                        $("#uploadTips").text( "上传错误请重新选择文件上传" );
                    }
                }
            },
            error: function(data, status, e) {
                $("#uploadTips").text( "上传错误请重新选择文件上传" );
                alert(e);
            }
        })
        return false;
    }
    
}]);