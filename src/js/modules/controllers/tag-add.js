/**=========================================================
 * Module: 新建标签
 * 
 =========================================================*/
(function() {
    'use strict';
    
    angular.module('clickplus').controller('TagAddController', TagAddController);

    TagAddController.$inject = ['$scope', '$http', 'dataservice', 'REGION', 'DICT'];

    function TagAddController($scope, $http, dataservice, REGION, DICT) {

        // 状态
        $scope.loading = true;
        $scope.bOther = false;
        $scope.bVerifed = false;
        $scope.bNameExit = false;

        // model
        $scope.tag = {
            'type': 0,
            'con': [{}]
        };
        $scope.region;
        $scope.area = DICT.area;
        $scope.dtTypeDict = DICT.dtTypeDict;
        $scope.recentDict = DICT.recentDict;
        $scope.funcs = DICT.funcs;
        $scope.regs = DICT.regs;
        $scope.events = [];
        $scope.sites = [];

        // view中使用到的方法
        $scope.checkNameUni = checkNameUni;
        $scope.verification = verification;
        $scope.addGoalItem = addGoalItem;
        $scope.deleteGoalItem = deleteGoalItem;
        $scope.showOther = showOther;
        $scope.areaSelect = areaSelect;
        $scope.provinceSelect = provinceSelect;
        $scope.citySelect = citySelect;
        $scope.save = save;
        $scope.cancel = cancel;
        $scope.stop = stop;
        $scope.selectSite = updateEvents;
        $scope.removeSite = updateEvents;

        init();

        function init() {
            moment.locale('zh-cn');

            for (var area in REGION) {
                for (var province in REGION[area]) {
                    for (var i = 0, length = REGION[area][province]['city'].length; i < length; i++) {
                        REGION[area][province]['city'][i]['selected'] = true;
                    }
                    REGION[area][province]['selected'] = true;
                }
            }
            $scope.region = REGION;

            dataservice.getResource({
                method: 'get',
                url: 'server/sites.json',
            }).then(function(data) {
                $scope.sites = data;
                $scope.loading = false;
            });

        }

        function checkNameUni() {
            dataservice.getResource({
                url: '/tags/name/used',
                data: {
                    company: company_id,
                    name: $scope.tag.name
                }
            }).then(function(data) {
                if (data == 'used') {
                    $scope.bNameExit = true;
                } else {
                    $scope.bNameExit = false;
                }
            });
        }


        function verification() {
            if ($.trim($scope.tag.name) == "" || $scope.tag.name.length > 20) {
                $scope.bVerifed = false;
            } else if ($scope.tag.des && $scope.tag.des.length > 100) {
                $scope.bVerifed = false;
            } else if (!$scope.tag.sites || $scope.tag.sites.length == 0) {
                $scope.bVerifed = false;
            } else {
                if ($scope.tag.type == 0) {
                    if (!$scope.tag.begin || $scope.tag.begin == "") {
                        console.log(3);
                        $scope.bVerifed = false;
                    } else if (!$scope.tag.end || $scope.tag.end == "") {
                        console.log(4);
                        $scope.bVerifed = false;
                    } else {
                        $scope.bVerifed = true;
                        if( !($scope.bOther && $scope.tag.con.length == 1 && !$scope.tag.con[0].hasOwnProperty('goal')) ){
                            for (var i = 0, length = $scope.tag.con.length; i < length; i++) {
                                if (!$scope.tag.con[i].hasOwnProperty('goal')) {
                                    $scope.bVerifed = false;
                                } else {
                                    var sites = $scope.tag.con[i]['goal']['sites'];
                                    if (sites.length > 1) {
                                        var selected = 0;
                                        for (var j = 0, l = sites.length; j < l; j++) {
                                            if (sites[j]['selected']) {
                                                selected++;
                                            }
                                        }
                                        if (selected == 0) {
                                            $scope.bVerifed = false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (!$scope.tag.hasOwnProperty('dtType')) {
                        $scope.bVerifed = false;
                    } else if ($scope.tag.dtType == 1 && !$scope.tag.hasOwnProperty('recent')) {
                        $scope.bVerifed = false;
                    } else if ($scope.tag.dtType == 2 && (!$scope.tag.begin || $scope.tag.begin == "")) {
                        $scope.bVerifed = false;
                    } else if ($scope.tag.dtType == 2 && (!$scope.tag.end || $scope.tag.end == "")) {
                        $scope.bVerifed = false;
                    } else {
                        $scope.bVerifed = true;
                        if( !($scope.bOther && $scope.tag.con.length == 1 && !$scope.tag.con[0].hasOwnProperty('goal')) ){
                            for (var i = 0, length = $scope.tag.con.length; i < length; i++) {
                                if (!$scope.tag.con[i].hasOwnProperty('func')) {
                                    $scope.bVerifed = false;
                                } else if (!$scope.tag.con[i].hasOwnProperty('reg')) {
                                    $scope.bVerifed = false;
                                } else if (!$scope.tag.con[i].hasOwnProperty('value')) {
                                    $scope.bVerifed = false;
                                } else if ($scope.tag.con[i].hasOwnProperty('value') && ($scope.tag.con[i]['value'] - 0) <= 0) {
                                    $scope.bVerifed = false;
                                } else if (!$scope.tag.con[i].hasOwnProperty('goal')) {
                                    $scope.bVerifed = false;
                                } else {
                                    var sites = $scope.tag.con[i]['goal']['sites'];
                                    if (sites.length > 1) {
                                        var selected = 0;
                                        for (var j = 0, l = sites.length; j < l; j++) {
                                            if (sites[j]['selected']) {
                                                selected++;
                                            }
                                        }
                                        if (selected == 0) {
                                            $scope.bVerifed = false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        function updateEvents() {
            var _events = [];
            for (var i = 0, length = $scope.sites.length; i < length; i++) {
                if ($.inArray($scope.sites[i]['idsite'], $scope.tag.sites) > -1) {
                    _events.push($scope.sites[i]);
                }
            }
            if (_events.length == 0) {
                $scope.events = _events;
            } else {
                $scope.events = site2goal(_events);
            }
        }

        function site2goal(sites) {
            var res = [];
            var event_info = {};
            for (var i = 0; i < sites.length; i++) {
                var tmpGoals = sites[i]['goal'];
                var tmpSiteId = sites[i]['idsite'];
                var tmpSiteName = sites[i]['name'];
                var tmpSites = [];

                for (var j = 0; j < tmpGoals.length; j++) {
                    var tmpGoalName = tmpGoals[j]['goal_name'];
                    if (tmpGoalName in event_info) {
                        tmpSites = event_info[tmpGoalName];
                    } else {
                        tmpSites = [];
                    }
                    tmpSites.push({
                        "event_id": tmpGoals[j]['goal_id'],
                        "site_name": tmpSiteName
                    });
                    event_info[tmpGoalName] = tmpSites;
                }
            }
            for (var k in event_info) {
                res.push({
                    "event_name": k,
                    "sites": event_info[k]
                });
            }
            return res;
        }


        function addGoalItem() {
            $scope.tag.con.push({});
            verification();
        }

        function deleteGoalItem(index) {
            $scope.tag.con.splice(index, 1);
            verification();
        }

        function showOther() {
            $scope.bOther = true;
            verification();
        }

        function areaSelect(area) {
            for (var province in $scope.region[area]) {
                for (var i = 0, length = $scope.region[area][province]['city'].length; i < length; i++) {
                    $scope.region[area][province]['city'][i]['selected'] = $scope.area[area];
                }
                $scope.region[area][province]['selected'] = $scope.area[area];
            }
        }


        function provinceSelect(area, province) {
            for (var i = 0, length = $scope.region[area][province]['city'].length; i < length; i++) {
                $scope.region[area][province]['city'][i]['selected'] = $scope.region[area][province]['selected'];
            }
            var areaStatus = true;
            for (var province in $scope.region[area]) {
                if (!$scope.region[area][province]['selected']) {
                    areaStatus = false;
                    break;
                }
            }
            $scope.area[area] = areaStatus;
        }


        function citySelect(area, province) {
            var provinceStatus = true;
            for (var i = 0, length = $scope.region[area][province]['city'].length; i < length; i++) {
                if (!$scope.region[area][province]['city'][i]['selected']) {
                    provinceStatus = false;
                    break;
                }
            }
            $scope.region[area][province]['selected'] = provinceStatus;
            var areaStatus = true;
            for (var province in $scope.region[area]) {
                if (!$scope.region[area][province]['selected']) {
                    areaStatus = false;
                    break;
                }
            }
            $scope.area[area] = areaStatus;
        }


        function save() {
            console.log($scope.tag);
            var postData = {
                'company': company_id
            };
            postData['name'] = $scope.tag.name;
            postData['des'] = $scope.tag.des;
            postData['type'] = $scope.tag.type - 0;
            // postData['begin'] = moment($scope.tag.begin).format("YYYY-MM-DD HH:mm:ss");
            // postData['end'] = moment($scope.tag.end).format("YYYY-MM-DD HH:mm:ss");
            if(postData['type'] == 1 && $scope.tag.dtType == 1){
                postData['recent'] = $scope.tag['recent'];
            }else{
                postData['begin'] = $scope.tag.begin;
                postData['end'] = $scope.tag.end;
            }
            postData['con'] = [];
            if( !($scope.tag.con.length == 1 && !$scope.tag.con[0].hasOwnProperty('goal')) ){
                for (var i = 0, length = $scope.tag.con.length; i < length; i++) {
                    var item = {};
                    item['idsite'] = $scope.tag.sites;
                    item['idgoal'] = [];
                    var goal = $scope.tag.con[i]['goal'];
                    if (goal.sites.length > 1) {
                        for (var j = 0, l = goal.sites.length; j < l; j++) {
                            if (goal.sites[j]['selected']) {
                                item['idgoal'].push(goal.sites[j]['event_id']);
                            }
                        }
                    } else {
                        item['idgoal'].push(goal.sites[0]['event_id']);
                    }
                    $scope.tag.con[i]['func'] && (item['func'] = $scope.tag.con[i]['func'])
                    $scope.tag.con[i]['reg'] && (item['reg'] = $scope.tag.con[i]['reg'])
                    $scope.tag.con[i]['value'] && (item['value'] = $scope.tag.con[i]['value'] - 0)
                    postData['con'].push(item);
                }
            }
            if ($scope.bOther) {
                if ($scope.tag.source && $scope.tag.source != "") {
                    var item = {};
                    item['idsite'] = $scope.tag.sites;
                    item['referer_url'] = $.trim($scope.tag.source).split('\n');
                    postData['con'].push(item);
                }
                var item = {};
                item['idsite'] = $scope.tag.sites;
                item['location_city'] = [];
                for (var area in $scope.region) {
                    for (var province in $scope.region[area]) {
                        for (var i = 0, length = $scope.region[area][province]['city'].length; i < length; i++) {
                            if ($scope.region[area][province]['city'][i]['selected']) {
                                item['location_city'].push($scope.region[area][province]['city'][i]['code']);
                            }
                        }
                        if ($scope.region[area][province]['selected'] && $scope.region[area][province]['city'].length > 1) {
                            item['location_city'].push($scope.region[area][province]['code']);
                        }
                    }
                }
                postData['con'].push(item);
            }
            postData['con'] = JSON.stringify(postData['con']);
            console.log(postData);
            dataservice.getResource({
                url: '/tags/add',
                data: postData
            }).then(function(data) {
                alert("新增成功");
                $scope.bOther = false;
                $scope.tag = {
                    'type': 0,
                    'con': [{}]
                }
            });
        }

        function cancel() {
            history.back();
        }

        function stop(event) {
            event.stopPropagation()
        }
    }
})();
