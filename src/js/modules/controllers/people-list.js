/**=========================================================
 * Module: datatable,js
 * Angular Datatable controller
 =========================================================*/
(function() {
    angular.module('clickplus').controller('PeopleListController', PeopleListController)

    PeopleListController.$inject = ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder', '$compile', 'LANGUAGE', 'dataservice']

    function PeopleListController($scope, $resource, DTOptionsBuilder, DTColumnDefBuilder, $compile, LANGUAGE, dataservice) {
        'use strict';

        // 状态
        $scope.loading = true;
        $scope.selectAll = false;
        $scope.showDelete = false; //是否显示删除框
        $scope.showCopy = false; //是否显示复制框


        // model
        $scope.peoples = null;
        $scope.dtInstance = {};
        $scope.selected = {};
        $scope.filter_value;
        $scope.selectedId = null; //选中的id
        $scope.deleteBoxLeft = 0; //删除的显示位置 离屏幕左
        $scope.deleteBoxTop = 0; //删除的显示位置  离屏幕上
        $scope.copyBoxLeft = 0; //复制的显示位置 离屏幕左
        $scope.copyBoxTop = 0; //复制的显示位置  离屏幕上
        $scope.dtOptions = {
            "aoData": $scope.peoples,
            "oLanguage": LANGUAGE.datatable,
            "sDom": 't<li>p',
            "fnHeaderCallback": function(header) {
                $compile(angular.element(header).contents())($scope);
            },
            "fnCreatedRow": function(row, data, dataIndex) {
                $(row).attr("id", data['id']);
                $compile(angular.element(row).contents())($scope);
            },
            "aaSorting": [
                [1, 'desc']
            ],
            responsive: {
                details: {
                    type: 'column',
                    renderer: function(api, rowIdx) {
                        if (peopleTagsCache.hasOwnProperty(rowIdx)) {
                            return renderChildTable(peopleTagsCache[rowIdx]);
                        } else {
                            var loading = '<div id="child_' + rowIdx + '">loading...</div>';
                            var tagIds = api.cell(rowIdx, ':hidden').data();
                            dataservice.getResource({
                                method: 'get',
                                url: '/server/people_tags.json'
                            }).then(function(data) {
                                peopleTagsCache[rowIdx] = data;
                                $("#child_" + rowIdx).replaceWith(renderChildTable(data));
                            });
                            return loading;
                        }
                    }
                }
            },
            columnDefs: [{
                className: 'control',
                orderable: false,
                targets: 0
            }]
        };
        $scope.dtColumns = [{
            "sTitle": "",
            "mData": null,
            "sWidth": "10px",
            "bSortable": false,
            "mRender": function(data, type, full) {
                return "";
            }
        }, {
            "sTitle": "创建时间",
            "mData": "updateTime",
            "mRender": function(data, type, full) {
                return moment(data.time).format("YYYY-MM-DD HH:mm:ss");
            }
        }, {
            "sTitle": "人群名称",
            "mData": "name",
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
            "sTitle": "覆盖人群",
            "mData": "coverage"
        }, {
            "sTitle": "操作",
            "sWidth": "200px",
            "mData": null,
            "bSortable": false,
            "mRender": function(data, type, full) {
                return '<a ng-href="#/people/edit/' + full['id'] + '">修改</a>&nbsp;' +
                    '<a  ng-click="showCopyBox(' + full['id'] + ', \'' + full['name'] + '\', $event)">复制</a>&nbsp;' +
                    '<a  ng-click="showDeleteBox(' + full['id'] + ', $event)">删除</a>&nbsp;'
            }
        }, {
            "sTitle": "",
            "mData": "tags",
            "sClass": "none",
            "mRender": function(data, type, full) {
                return "";
            }
        }];
        
        // view中使用到的方法
        $scope.filte = filte;
        $scope.toggleAll = toggleAll;
        $scope.toggleOne = toggleOne;
        $scope.showDeleteBox = showDeleteBox;
        $scope.doDelete = doDelete;
        $scope.cancelDelete = cancelDelete;
        $scope.showCopyBox = showCopyBox;
        $scope.doCopy = doCopy;
        $scope.cancelCopy = cancelCopy;
        

        var peopleTagsCache = {};

        function renderChildTable(tags) {
            var html = '<table class="child"><thead><tr><th>创建时间</th><th>标签名称</th><th>创建人</th><th>覆盖人群</th><th style="width:200px;">操作</th></tr></thead><tbody>';
            for (var index in tags) {
                html += '<tr><td>' + moment(tags[index]['updateTime']['time']).format("YYYY-MM-DD HH:mm:ss") + '</td><td>' +
                    tags[index]['name'] + '</td><td>' +
                    $scope.users[tags[index]['memder']] + '</td><td>' +
                    tags[index]['coverage'] + '</td><td>' +
                    '<a href="#/tag/edit/' + tags[index]['id'] + '">修改</a></td></tr>';
            }
            html += "</tbody></table>";
            return html;
        }

        init();

        function init(){
            dataservice.getResource({
                method: 'get',
                url: 'server/users.json'
            }).then(function(data) {
                $scope.users = {};
                for (var i = 0, length = data.length; i < length; i++) {
                    $scope.users[data[i]['id']] = data[i]['name'];
                }
                return dataservice.getResource({
                    method: 'get',
                    url: 'server/peoples.json'
                })
            }).then(function(data) {
                $scope.peoples = data;
                $scope.dtOptions['data'] = $scope.peoples;
                $scope.loading = false;
            });
        }

        function filte(value) {
            $scope.dtInstance.dataTable.fnFilter(value);
        }

        
        function toggleAll(selectAll, selectedItems) {
            console.log("toggleall");
            for (var id in selectedItems) {
                if (selectedItems.hasOwnProperty(id)) {
                    selectedItems[id] = selectAll;
                }
            }
        }
        
        function toggleOne(selectedItems) {
            console.log("toggleone");
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

        
        function showDeleteBox(id, event) {
            $scope.showCopy = false;
            $scope.showDelete = true;
            $scope.selectedId = id;
            $scope.deleteBoxLeft = $(event.target).offset().left - 255;
            $scope.deleteBoxTop = $(event.target).offset().top - 175;
        }

        
        function doDelete() {
            dataservice.getResource({
                url: '/people/del',
                data: {
                    id: $scope.selectedId
                }
            }).then(function(data) {
                for (var i = 0, length = $scope.peoples.length; i < length; i++) {
                    if ($scope.peoples[i]['id'] == $scope.selectedId) {
                        $scope.peoples.splice(i, 1);
                        break;
                    }
                }
                $scope.showDelete = false;
            });
        }

        
        function cancelDelete() {
            $scope.showDelete = false;
        }

        
        function showCopyBox(id, name, event) {
            $scope.showDelete = false;
            $scope.showCopy = true;
            $scope.selectedId = id;
            $scope.copyName = name + "_副本";
            $scope.copyBoxLeft = $(event.target).offset().left - 255;
            $scope.copyBoxTop = $(event.target).offset().top - 175;
        }

        
        function doCopy() {
            dataservice.getResource({
                url: '/people/copy',
                data: {
                    id: $scope.selectedId,
                    name: $scope.copyName
                }
            }).then(function(data) {
                $scope.peoples.push(data);
                $scope.showCopy = false;
            });
        }

        
        function cancelCopy() {
            $scope.showCopy = false;
        }

    }
})();
