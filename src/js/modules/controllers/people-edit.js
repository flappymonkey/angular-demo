/**=========================================================
 * Module: 
 * 
 =========================================================*/
(function(){
    'use strict';

    angular.module('clickplus').controller('PeopleEditController', PeopleEditController);

    PeopleEditController.$inject = ["$scope", "$stateParams", "dataservice"];
    
    function PeopleEditController($scope, $stateParams, dataservice) {

        // 状态
        $scope.loading = true;
        $scope.bVerifed = true;
        $scope.bAdd = false;
        $scope.bNameExit = false;

        // model
        $scope.selected = {};
        $scope.filterText = '';
        $scope.length = 120;
        $scope.currentPage = 1;
        $scope.addBoxLeft = 0; //删除的显示位置 离屏幕左
        $scope.addBoxTop = 0; //删除的显示位置  离屏幕上

        // view中使用到的方法
        $scope.checkNameUni = checkNameUni;
        $scope.verification = verification;
        $scope.showAddTag = showAddTag;
        $scope.deleteTag = deleteTag;
        $scope.tagSave = tagSave;
        $scope.tagCancel = tagCancel;
        $scope.save = save;
        $scope.cancel = cancel;
        

        init();

        function init(){
            dataservice.getResource({
                method: 'get',
                url: 'server/people.json'
            }).then(function(data) {
                data['tags'] = JSON.parse(data['tags']);
                $scope.people = data;
                $scope.originName = $scope.people.name;
                $scope.people['tagItems'] = [];
                return dataservice.getResource({
                    method: 'get',
                    url: 'server/tags.json'
                })
            }).then(function(data) {
                $scope.tags = data;
                for (var i = 0, length = $scope.tags.length; i < length; i++) {
                    if ($.inArray($scope.tags[i]['id'], $scope.people.tags) > -1) {
                        $scope.tags[i]['selected'] = true;
                        $scope.people['tagItems'].push($scope.tags[i]);
                    } else {
                        $scope.tags[i]['selected'] = false;
                    }
                }
                $scope.loading = false;
            });
        }

        function checkNameUni() {
            if($scope.people.name == $scope.originName){
                $scope.bNameExit = false;
            }else{
                dataservice.getResource({
                    url: '/people/name/used'
                }).then(function(data) {
                    if (data == 'used') {
                        $scope.bNameExit = true;
                    } else {
                        $scope.bNameExit = false;
                    }
                });
            }
        }

        
        function verification() {
            if ($.trim($scope.people.name) != "" && $scope.people.coverage != 0) {
                $scope.bVerifed = true;
            } else {
                $scope.bVerifed = false;
            }
        }

        
        function showAddTag(event) {
            $scope.bAdd = !$scope.bAdd;
            $scope.currentPage = 1;
            $scope.addBoxLeft = $(event.target).offset().left - 240;
            $scope.addBoxTop = $(event.target).offset().top - 135;
        }

        
        function deleteTag(index) {
            $scope.people.tagItems.splice(index, 1);
            countCoverage();
            $scope.verification();
        }

        
        function tagSave() {
            $scope.people.tagItems = [];
            $scope.people.coverage = 0;
            for (var i = 0, length = $scope.tags.length; i < length; i++) {
                if ($scope.tags[i]['selected']) {
                    $scope.people.tagItems.push($scope.tags[i]);
                }
            }
            $scope.bAdd = false;
            $scope.verification();
        }

        function countCoverage(){
            var coverage = 0;
            for(var i = 0, length = $scope.people.tagItems.length; i < length; i++){
                coverage += $scope.people.tagItems[i]['coverage'];
            }
            $scope.people.coverage = coverage;
        }

        
        function tagCancel() {
            $scope.bAdd = false;
        }

        
        function save() {
            var people = {
                id: $scope.people['id']
            };
            people['name'] = $scope.people.name;
            people['coverage'] = $scope.people.coverage;
            people['tags'] = [];
            for (var i = 0, length = $scope.people.tagItems.length; i < length; i++) {
                people['tags'].push($scope.people.tagItems[i]['id']);
            }
            console.log(people);
            people['tags'] = JSON.stringify(people['tags']);
            dataservice.getResource({
                url: '/people/update',
                data: people
            }).then(function(data) {
                alert("修改成功");
            });
        }

        
        function cancel() {
            history.back();
        }

    }
})();
