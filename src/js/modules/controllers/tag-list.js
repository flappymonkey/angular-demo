/**=========================================================
 * Module: 标签列表
 =========================================================*/
(function() {
    'use strict';

    angular.module('clickplus').controller('TagListController', TagListController);

    TagListController.$inject = ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', '$compile', 'LANGUAGE', 'dataservice', 'DICT'];

    function TagListController($scope, $resource, DTOptionsBuilder, DTColumnBuilder, $compile, LANGUAGE, dataservice, DICT) {

        // 状态
        $scope.exportConfirm = false;
        $scope.searchingPeople = false;
        $scope.loading = true;
        $scope.selectAll = false;
        $scope.showDelete = false; //是否显示删除框
        $scope.selectedId = null; //选中的id
        $scope.deleteBoxLeft = 0; //删除的显示位置 离屏幕左
        $scope.deleteBoxTop = 0; //删除的显示位置  离屏幕上
        $scope.deleteShowDict = {};
        $scope.dtInstance = {};
        $scope.selected = {};

        // model
        $scope.tags = null;
        $scope.filter_value;
        $scope.dtOptions = {
            "aoData": $scope.tags,
            "oLanguage": LANGUAGE.datatable,
            "sDom": 't<li>p',
            "sPaginationType": "full_numbers",
            "aaSorting": [
                [5, 'desc']
            ],
            "fnHeaderCallback": function(header) {
                // if (!$scope.headerCompiled) {
                // $scope.headerCompiled = true; //每次排序等操作头部都会渲染所以不能只编译一次，但是每次编译都会生成一个新的ng-click事件，所以当编译几次点击后ng-click对应的事件就执行了几次
                $compile(angular.element(header).contents())($scope);
                // }
            },
            "fnCreatedRow": function(row, data, dataIndex) {
                // console.log("row call");
                $compile(angular.element(row).contents())($scope);
            }
        };
        var selectTitleHtml = '<input type="checkbox" ng-model="selectAll" ng-click="toggleAll(selectAll, selected)">';
        $scope.dtColumns = [{
            "sTitle": "",
            "mData": "id",
            "sWidth": "0",
            "bVisible": false,
            "bSortable": false
        }, {
            "sTitle": selectTitleHtml,
            "mData": "id",
            "sWidth": "10px",
            "bSortable": false,
            "mRender": function(data, type, full) {
                $scope.selected[full.id] = false;
                return '<input type="checkbox" id="' + full['id'] + '" ng-model="selected[' + full.id + ']" ng-click="toggleOne(selected)">';
            }
        }, {
            "sTitle": "标签名",
            "mData": "name",
            "bSortable": false
        }, {
            "sTitle": "标签描述",
            "mData": "des",
            "bSortable": false
        }, {
            "sTitle": "创建人",
            "mData": "memder",
            "bSortable": false,
            "mRender": function(data, type, full) {
                // return data;
                return $scope.users[data];
            }
        }, {
            "sTitle": "创建时间",
            "mData": "updateTime",
            "mRender": function(data, type, full) {
                return moment(data.time).format("YYYY-MM-DD HH:mm:ss");
            }
        }, {
            "sTitle": "覆盖人群",
            "mData": null,
            "mRender": function(data, type, full) {
                if (full['coverage'] > -1) {
                    return full['coverage'];
                } else {
                    return "正在生成中...";
                }
            }
        }, {
            "sTitle": "标签类型",
            "mData": "type",
            "mRender": function(data, type, full) {
                return DICT.tagType[data];
            }
        }, {
            "sTitle": "操作",
            "mData": null,
            "bSortable": false,
            "mRender": function(data, type, full) {
                $scope.deleteShowDict[full['id']] = false;
                return (full['type'] ==  2 ? '' : '<a ng-href="#/tag/edit/' + full['id'] + '">修改</a>&nbsp;' ) +
                    '<a  ng-click="showDeleteBox(' + full['id'] + ')">删除</a>&nbsp;';
            }
        }];

        // view中使用到的方法
        $scope.exportTag = exportTag;
        $scope.exportCheck = exportCheck;
        $scope.exportCancel = exportCancel;
        $scope.exportTag = exportTag;
        $scope.filte = filte;
        $scope.toggleAll = toggleAll;
        $scope.toggleOne = toggleOne;
        $scope.showDeleteBox = showDeleteBox;
        $scope.doDelete = doDelete;
        $scope.cancelDelete = cancelDelete;

        init();

        function init() {
            dataservice.getResource({
                method: 'get',
                url: 'server/users.json'
            }).then(function(data) {
                $scope.users = {};
                for (var i = 0, length = data.length; i < length; i++) {
                    $scope.users[data[i]['id']] = data[i]['name'];
                }
                console.log($scope.users);
                return dataservice.getResource({
                    method: 'get',
                    url: 'server/tags.json'
                })
            }).then(function(data) {
                $scope.tags = data;
                $scope.dtOptions['data'] = $scope.tags;
                $scope.loading = false;
            });
        }

        function filte(value) {
            $scope.dtInstance.dataTable.fnFilter(value);
        }

        function toggleAll(selectAll, selectedItems) {
            for (var id in selectedItems) {
                if (selectedItems.hasOwnProperty(id)) {
                    selectedItems[id] = selectAll;
                }
            }
        }

        function toggleOne(selectedItems) {
            for (var id in selectedItems) {
                if (selectedItems.hasOwnProperty(id)) {
                    if (!selectedItems[id]) {
                        $scope.selectAll = false;
                        return;
                    }
                }
            }
            $scope.selectAll = true;
        }

        function showDeleteBox(tagid) {
            $scope.searchingPeople = true;
            $scope.showDelete = true;
            $scope.selectedId = tagid;
            $scope.deleteBoxLeft = $(event.target).offset().left - 255;
            $scope.deleteBoxTop = $(event.target).offset().top - 175;

            dataservice.getResource({
                url: '/tags/query/people',
                data: {
                    id: tagid
                }
            }).then(function(data) {
                if (data.length > 0) {
                    var text = "该标签已经被"
                    var names = [];
                    for (var i = 0, length = data.length; i < length; i++) {
                        names.push('"' + data[i]['name'] + '"');
                    }
                    text += names.join(',') + "营销人群应用，删除之后会造成一定影响！";
                    $scope.searchingResult = text;
                } else {
                    $scope.searchingResult = "";
                }
                $scope.searchingPeople = false;
            });

        }

        function doDelete(tagid) {
            dataservice.getResource({
                url: '/tags/del',
                data: {
                    id: $scope.selectedId
                }
            }).then(function(data) {
                for (var i = 0, length = $scope.tags.length; i < length; i++) {
                    if ($scope.tags[i]['id'] == $scope.selectedId) {
                        $scope.tags.splice(i, 1);
                        break;
                    }
                }
                $scope.showDelete = false;
            });
        }

        function cancelDelete(id) {
            $scope.showDelete = false;
        }

        function exportCheck() {
            var tag_list = [];
            for (var id in $scope.selected) {
                if ($scope.selected[id]) {
                    tag_list.push(id);
                }
            }
            if (tag_list.length == 0) {
                alert("请先选择需要导出的标签");
            } else {
                $scope.exportConfirm = true;
            }
        }

        function exportTag() {
            var tag_list = [];
            for (var id in $scope.selected) {
                if ($scope.selected[id]) {
                    tag_list.push(id);
                }
            }
            var url = "/file/download?tag_list=" + tag_list.join(',');
            downloadFile(url);
            $scope.exportConfirm = false;
        }

        function exportCancel() {
            $scope.exportConfirm = false;
        }

        function downloadFile(url) {
            var elemIF = document.createElement("iframe");
            elemIF.src = url;
            elemIF.style.display = "none";
            document.body.appendChild(elemIF);
        }

    }
})();
