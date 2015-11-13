!function(e){"use strict";"function"==typeof define&&define.amd?define(["angular","moment"],e):"object"==typeof exports?module.exports=e(require("angular"),require("moment")):e(window.angular,window.moment)}(function(e,t){"use strict";e.module("ui.bootstrap.datetimepicker",[]).constant("dateTimePickerConfig",{dropdownSelector:null,minuteStep:5,minView:"minute",startView:"day"}).directive("datetimepicker",["$log","dateTimePickerConfig",function(a,r){function i(){var e=new Date,t=6e4*e.getTimezoneOffset();this.utcDateValue=e.getTime(),this.selectable=!0,this.localDateValue=function(){return this.utcDateValue+t};var a=["utcDateValue","localDateValue","display","active","selectable","past","future"];for(var r in arguments[0])a.indexOf(r)>=0&&(this[r]=arguments[0][r])}var n=function(t){var r=["startView","minView","minuteStep","dropdownSelector"];for(var i in t)if(r.indexOf(i)<0)throw"invalid option: "+i;var n=["minute","hour","day","month","year"];if(n.indexOf(t.startView)<0)throw"invalid startView value: "+t.startView;if(n.indexOf(t.minView)<0)throw"invalid minView value: "+t.minView;if(n.indexOf(t.minView)>n.indexOf(t.startView))throw"startView must be greater than minView";if(!e.isNumber(t.minuteStep))throw"minuteStep must be numeric";if(t.minuteStep<=0||t.minuteStep>=60)throw"minuteStep must be greater than zero and less than 60";if(null!==t.dropdownSelector&&!e.isString(t.dropdownSelector))throw"dropdownSelector must be a string";null===t.dropdownSelector||"undefined"!=typeof jQuery&&"function"==typeof jQuery().dropdown||(a.error("Please DO NOT specify the dropdownSelector option unless you are using jQuery AND Bootstrap.js. Please include jQuery AND Bootstrap.js, or write code to close the dropdown in the on-set-time callback. \n\nThe dropdownSelector configuration option is being removed because it will not function properly."),delete t.dropdownSelector)};return{restrict:"E",require:"ngModel",template:'<div class="datetimepicker table-responsive"><table class="table table-condensed  {{ data.currentView }}-view">   <thead>       <tr>           <th class="left" data-ng-click="changeView(data.currentView, data.leftDate, $event)" data-ng-show="data.leftDate.selectable"><i class="glyphicon glyphicon-arrow-left"/></th>           <th class="switch" colspan="5" data-ng-show="data.previousViewDate.selectable" data-ng-click="changeView(data.previousView, data.previousViewDate, $event)">{{ data.previousViewDate.display }}</th>           <th class="right" data-ng-click="changeView(data.currentView, data.rightDate, $event)" data-ng-show="data.rightDate.selectable"><i class="glyphicon glyphicon-arrow-right"/></th>       </tr>       <tr>           <th class="dow" data-ng-repeat="day in data.dayNames" >{{ day }}</th>       </tr>   </thead>   <tbody>       <tr data-ng-if="data.currentView !== \'day\'" >           <td colspan="7" >              <span    class="{{ data.currentView }}"                        data-ng-repeat="dateObject in data.dates"                         data-ng-class="{active: dateObject.active, past: dateObject.past, future: dateObject.future, disabled: !dateObject.selectable}"                        data-ng-click="changeView(data.nextView, dateObject, $event)">{{ dateObject.display }}</span>            </td>       </tr>       <tr data-ng-if="data.currentView === \'day\'" data-ng-repeat="week in data.weeks">           <td data-ng-repeat="dateObject in week.dates"                data-ng-click="changeView(data.nextView, dateObject, $event)"               class="day"                data-ng-class="{active: dateObject.active, past: dateObject.past, future: dateObject.future, disabled: !dateObject.selectable}" >{{ dateObject.display }}</td>       </tr>   </tbody></table></div>',scope:{onSetTime:"&",beforeRender:"&"},replace:!0,link:function(a,u,o,d){var s={};o.datetimepickerConfig&&(s=a.$parent.$eval(o.datetimepickerConfig));var l={};e.extend(l,r,s),n(l);var c=function(e){var a=10*parseInt(t.utc(e).year()/10,10);return t.utc(e).year(a).startOf("year")},f={year:function(e){for(var a=t.utc(e).startOf("year"),r=10*parseInt(a.year()/10,10),n=t.utc(c(e)).subtract(1,"year").startOf("year"),u=d.$modelValue?t(d.$modelValue).year():0,o={currentView:"year",nextView:"year"===l.minView?"setTime":"month",previousViewDate:new i({utcDateValue:null,display:r+"-"+(r+9)}),leftDate:new i({utcDateValue:t.utc(n).subtract(9,"year").valueOf()}),rightDate:new i({utcDateValue:t.utc(n).add(11,"year").valueOf()}),dates:[]},s=0;12>s;s+=1){var f=t.utc(n).add(s,"years"),w={utcDateValue:f.valueOf(),display:f.format("YYYY"),past:f.year()<r,future:f.year()>r+9,active:f.year()===u};o.dates.push(new i(w))}return o},month:function(e){for(var a=t.utc(e).startOf("year"),r=c(e),n=d.$modelValue?t(d.$modelValue).format("YYYY-MMM"):0,u={previousView:"year",currentView:"month",nextView:"month"===l.minView?"setTime":"day",previousViewDate:new i({utcDateValue:r.valueOf(),display:a.format("YYYY")}),leftDate:new i({utcDateValue:t.utc(a).subtract(1,"year").valueOf()}),rightDate:new i({utcDateValue:t.utc(a).add(1,"year").valueOf()}),dates:[]},o=0;12>o;o+=1){var s=t.utc(a).add(o,"months"),f={utcDateValue:s.valueOf(),display:s.format("MMM"),active:s.format("YYYY-MMM")===n};u.dates.push(new i(f))}return u},day:function(e){for(var a=t.utc(e),r=t.utc(a).startOf("month"),n=t.utc(a).startOf("year"),u=t.utc(a).endOf("month"),o=t.utc(r).subtract(Math.abs(r.weekday()),"days"),s=d.$modelValue?t(d.$modelValue).format("YYYY-MMM-DD"):"",c={previousView:"month",currentView:"day",nextView:"day"===l.minView?"setTime":"hour",previousViewDate:new i({utcDateValue:n.valueOf(),display:r.format("YYYY-MMM")}),leftDate:new i({utcDateValue:t.utc(r).subtract(1,"months").valueOf()}),rightDate:new i({utcDateValue:t.utc(r).add(1,"months").valueOf()}),dayNames:[],weeks:[]},f=0;7>f;f+=1)c.dayNames.push(t.utc().weekday(f).format("dd"));for(var w=0;6>w;w+=1){for(var m={dates:[]},p=0;7>p;p+=1){var V=t.utc(o).add(7*w+p,"days"),v={utcDateValue:V.valueOf(),display:V.format("D"),active:V.format("YYYY-MMM-DD")===s,past:V.isBefore(r),future:V.isAfter(u)};m.dates.push(new i(v))}c.weeks.push(m)}return c},hour:function(e){for(var a=t.utc(e).startOf("day"),r=t.utc(a).startOf("month"),n=d.$modelValue?t(d.$modelValue).format("YYYY-MM-DD H"):"",u={previousView:"day",currentView:"hour",nextView:"hour"===l.minView?"setTime":"minute",previousViewDate:new i({utcDateValue:r.valueOf(),display:a.format("ll")}),leftDate:new i({utcDateValue:t.utc(a).subtract(1,"days").valueOf()}),rightDate:new i({utcDateValue:t.utc(a).add(1,"days").valueOf()}),dates:[]},o=0;24>o;o+=1){var s=t.utc(a).add(o,"hours"),c={utcDateValue:s.valueOf(),display:s.format("LT"),active:s.format("YYYY-MM-DD H")===n};u.dates.push(new i(c))}return u},minute:function(e){for(var a=t.utc(e).startOf("hour"),r=t.utc(a).startOf("day"),n=d.$modelValue?t(d.$modelValue).format("YYYY-MM-DD H:mm"):"",u={previousView:"hour",currentView:"minute",nextView:"setTime",previousViewDate:new i({utcDateValue:r.valueOf(),display:a.format("lll")}),leftDate:new i({utcDateValue:t.utc(a).subtract(1,"hours").valueOf()}),rightDate:new i({utcDateValue:t.utc(a).add(1,"hours").valueOf()}),dates:[]},o=60/l.minuteStep,s=0;o>s;s+=1){var c=t.utc(a).add(s*l.minuteStep,"minute"),f={utcDateValue:c.valueOf(),display:c.format("LT"),active:c.format("YYYY-MM-DD H:mm")===n};u.dates.push(new i(f))}return u},setTime:function(e){var t=new Date(e),r=new Date(t.getTime()+6e4*t.getTimezoneOffset()),i=d.$modelValue;return d.$setViewValue(r),l.dropdownSelector&&jQuery(l.dropdownSelector).dropdown("toggle"),a.onSetTime({newDate:r,oldDate:i}),f[l.startView](e)}},w=function(e){var a=e?t(e).toDate():new Date;return a.getTime()-6e4*a.getTimezoneOffset()};a.changeView=function(e,t,r){if(r&&(r.stopPropagation(),r.preventDefault()),e&&t.utcDateValue>-(1/0)&&t.selectable&&f[e]){var i=f[e](t.utcDateValue),n=[];if(i.weeks)for(var u=0;u<i.weeks.length;u+=1)for(var o=i.weeks[u],d=0;d<o.dates.length;d+=1){var s=o.dates[d];n.push(s)}a.beforeRender({$view:i.currentView,$dates:i.dates||n,$leftDate:i.leftDate,$upDate:i.previousViewDate,$rightDate:i.rightDate}),a.data=i}},d.$render=function(){a.changeView(l.startView,new i({utcDateValue:w(d.$viewValue)}))}}}}])});