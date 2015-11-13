(function() {
    'use strict';

    angular.module('clickplus').factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$location', '$q'];

    function dataservice($http, $location, $q) {
        var service = {
            getResource: resource
        };

        return service;

        function resource(config) {
            var ori_config = {
                method: 'post',
                dataType: 'json',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
            $.extend(ori_config, config);
            ori_config['data'] = JSON.stringify(ori_config['data']);
            return $http(ori_config)
                .then(function(response) {
                    var ret_data = response.data;
                    if (ret_data.success) {
                        return ret_data.data;
                    } else if (ret_data.code == -1) {
                        $location.url("/user/login");
                    } else {
                        console.log("返回数据格式有问题");
                    }
                })
                .catch(function(message) {
                    console.log('异步请求失败');
                });
        }
    }

})();
