!function(t,e){if("function"==typeof define&&define.amd)define(["moment","jquery","exports"],function(a,i,s){t.daterangepicker=e(t,s,a,i)});else if("undefined"!=typeof exports){var a=require("moment"),i="undefined"!=typeof window?window.jQuery:void 0;if(!i)try{i=require("jquery"),i.fn||(i.fn={})}catch(s){if(!i)throw new Error("jQuery dependency not found")}e(t,exports,a,i)}else t.daterangepicker=e(t,{},t.moment||moment,t.jQuery||t.Zepto||t.ender||t.$)}(this||{},function(t,e,a,i){var s=function(t,e,s){if(this.parentEl="body",this.element=i(t),this.startDate=a().startOf("day"),this.endDate=a().endOf("day"),this.minDate=!1,this.maxDate=!1,this.dateLimit=!1,this.autoApply=!1,this.singleDatePicker=!1,this.showDropdowns=!1,this.showWeekNumbers=!1,this.timePicker=!1,this.timePicker24Hour=!1,this.timePickerIncrement=1,this.timePickerSeconds=!1,this.linkedCalendars=!0,this.autoUpdateInput=!0,this.ranges={},this.opens="right",this.element.hasClass("pull-right")&&(this.opens="left"),this.drops="down",this.element.hasClass("dropup")&&(this.drops="up"),this.buttonClasses="btn btn-sm",this.applyClass="btn-success",this.cancelClass="btn-default",this.locale={format:"MM/DD/YYYY",separator:" - ",applyLabel:"Apply",cancelLabel:"Cancel",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:a.weekdaysMin(),monthNames:a.monthsShort(),firstDay:a.localeData().firstDayOfWeek()},this.callback=function(){},this.isShowing=!1,this.leftCalendar={},this.rightCalendar={},("object"!=typeof e||null===e)&&(e={}),e=i.extend(this.element.data(),e),"string"!=typeof e.template&&(e.template='<div class="daterangepicker dropdown-menu"><div class="calendar left"><div class="daterangepicker_input"><input class="input-mini" type="text" name="daterangepicker_start" value="" /><i class="fa fa-calendar glyphicon glyphicon-calendar"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="calendar right"><div class="daterangepicker_input"><input class="input-mini" type="text" name="daterangepicker_end" value="" /><i class="fa fa-calendar glyphicon glyphicon-calendar"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="ranges"><div class="range_inputs"><button class="applyBtn" disabled="disabled" type="button"></button> <button class="cancelBtn" type="button"></button></div></div></div>'),this.parentEl=i(e.parentEl&&i(e.parentEl).length?e.parentEl:this.parentEl),this.container=i(e.template).appendTo(this.parentEl),"object"==typeof e.locale&&("string"==typeof e.locale.format&&(this.locale.format=e.locale.format),"string"==typeof e.locale.separator&&(this.locale.separator=e.locale.separator),"object"==typeof e.locale.daysOfWeek&&(this.locale.daysOfWeek=e.locale.daysOfWeek.slice()),"object"==typeof e.locale.monthNames&&(this.locale.monthNames=e.locale.monthNames.slice()),"number"==typeof e.locale.firstDay&&(this.locale.firstDay=e.locale.firstDay),"string"==typeof e.locale.applyLabel&&(this.locale.applyLabel=e.locale.applyLabel),"string"==typeof e.locale.cancelLabel&&(this.locale.cancelLabel=e.locale.cancelLabel),"string"==typeof e.locale.weekLabel&&(this.locale.weekLabel=e.locale.weekLabel),"string"==typeof e.locale.customRangeLabel&&(this.locale.customRangeLabel=e.locale.customRangeLabel)),"string"==typeof e.startDate&&(this.startDate=a(e.startDate,this.locale.format)),"string"==typeof e.endDate&&(this.endDate=a(e.endDate,this.locale.format)),"string"==typeof e.minDate&&(this.minDate=a(e.minDate,this.locale.format)),"string"==typeof e.maxDate&&(this.maxDate=a(e.maxDate,this.locale.format)),"object"==typeof e.startDate&&(this.startDate=a(e.startDate)),"object"==typeof e.endDate&&(this.endDate=a(e.endDate)),"object"==typeof e.minDate&&(this.minDate=a(e.minDate)),"object"==typeof e.maxDate&&(this.maxDate=a(e.maxDate)),this.minDate&&this.startDate.isBefore(this.minDate)&&(this.startDate=this.minDate.clone()),this.maxDate&&this.endDate.isAfter(this.maxDate)&&(this.endDate=this.maxDate.clone()),"string"==typeof e.applyClass&&(this.applyClass=e.applyClass),"string"==typeof e.cancelClass&&(this.cancelClass=e.cancelClass),"object"==typeof e.dateLimit&&(this.dateLimit=e.dateLimit),"string"==typeof e.opens&&(this.opens=e.opens),"string"==typeof e.drops&&(this.drops=e.drops),"boolean"==typeof e.showWeekNumbers&&(this.showWeekNumbers=e.showWeekNumbers),"string"==typeof e.buttonClasses&&(this.buttonClasses=e.buttonClasses),"object"==typeof e.buttonClasses&&(this.buttonClasses=e.buttonClasses.join(" ")),"boolean"==typeof e.showDropdowns&&(this.showDropdowns=e.showDropdowns),"boolean"==typeof e.singleDatePicker&&(this.singleDatePicker=e.singleDatePicker,this.singleDatePicker&&(this.endDate=this.startDate.clone())),"boolean"==typeof e.timePicker&&(this.timePicker=e.timePicker),"boolean"==typeof e.timePickerSeconds&&(this.timePickerSeconds=e.timePickerSeconds),"number"==typeof e.timePickerIncrement&&(this.timePickerIncrement=e.timePickerIncrement),"boolean"==typeof e.timePicker24Hour&&(this.timePicker24Hour=e.timePicker24Hour),"boolean"==typeof e.autoApply&&(this.autoApply=e.autoApply),"boolean"==typeof e.autoUpdateInput&&(this.autoUpdateInput=e.autoUpdateInput),"boolean"==typeof e.linkedCalendars&&(this.linkedCalendars=e.linkedCalendars),"function"==typeof e.isInvalidDate&&(this.isInvalidDate=e.isInvalidDate),0!=this.locale.firstDay)for(var n=this.locale.firstDay;n>0;)this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()),n--;var r,h,l;if("undefined"==typeof e.startDate&&"undefined"==typeof e.endDate&&i(this.element).is("input[type=text]")){var o=i(this.element).val(),c=o.split(this.locale.separator);r=h=null,2==c.length?(r=a(c[0],this.locale.format),h=a(c[1],this.locale.format)):this.singleDatePicker&&""!==o&&(r=a(o,this.locale.format),h=a(o,this.locale.format)),null!==r&&null!==h&&(this.setStartDate(r),this.setEndDate(h))}if("object"==typeof e.ranges){for(l in e.ranges){r="string"==typeof e.ranges[l][0]?a(e.ranges[l][0],this.locale.format):a(e.ranges[l][0]),h="string"==typeof e.ranges[l][1]?a(e.ranges[l][1],this.locale.format):a(e.ranges[l][1]),this.minDate&&r.isBefore(this.minDate)&&(r=this.minDate.clone());var d=this.maxDate;if(this.dateLimit&&r.clone().add(this.dateLimit).isAfter(d)&&(d=r.clone().add(this.dateLimit)),d&&h.isAfter(d)&&(h=d.clone()),!(this.minDate&&h.isBefore(this.minDate)||d&&r.isAfter(d))){var m=document.createElement("textarea");m.innerHTML=l,rangeHtml=m.value,this.ranges[rangeHtml]=[r,h]}}var f="<ul>";for(l in this.ranges)f+="<li>"+l+"</li>";f+="<li>"+this.locale.customRangeLabel+"</li>",f+="</ul>",this.container.find(".ranges").prepend(f)}if("function"==typeof s&&(this.callback=s),this.timePicker||(this.startDate=this.startDate.startOf("day"),this.endDate=this.endDate.endOf("day"),this.container.find(".calendar-time").hide()),this.timePicker&&this.autoApply&&(this.autoApply=!1),this.autoApply&&"object"!=typeof e.ranges?this.container.find(".ranges").hide():this.autoApply&&this.container.find(".applyBtn, .cancelBtn").addClass("hide"),this.singleDatePicker&&(this.container.addClass("single"),this.container.find(".calendar.left").addClass("single"),this.container.find(".calendar.left").show(),this.container.find(".calendar.right").hide(),this.container.find(".daterangepicker_input input, .daterangepicker_input i").hide(),this.timePicker||this.container.find(".ranges").hide()),"undefined"!=typeof e.ranges||this.singleDatePicker||this.container.addClass("show-calendar"),this.container.addClass("opens"+this.opens),"undefined"!=typeof e.ranges&&"right"==this.opens){var p=this.container.find(".ranges"),u=p.clone();p.remove(),this.container.find(".calendar.left").parent().prepend(u)}this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses),this.applyClass.length&&this.container.find(".applyBtn").addClass(this.applyClass),this.cancelClass.length&&this.container.find(".cancelBtn").addClass(this.cancelClass),this.container.find(".applyBtn").html(this.locale.applyLabel),this.container.find(".cancelBtn").html(this.locale.cancelLabel),this.container.find(".calendar").on("click.daterangepicker",".prev",i.proxy(this.clickPrev,this)).on("click.daterangepicker",".next",i.proxy(this.clickNext,this)).on("click.daterangepicker","td.available",i.proxy(this.clickDate,this)).on("mouseenter.daterangepicker","td.available",i.proxy(this.hoverDate,this)).on("mouseleave.daterangepicker","td.available",i.proxy(this.updateFormInputs,this)).on("change.daterangepicker","select.yearselect",i.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.monthselect",i.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.hourselect,select.minuteselect,select.secondselect,select.ampmselect",i.proxy(this.timeChanged,this)).on("click.daterangepicker",".daterangepicker_input input",i.proxy(this.showCalendars,this)).on("change.daterangepicker",".daterangepicker_input input",i.proxy(this.formInputsChanged,this)),this.container.find(".ranges").on("click.daterangepicker","button.applyBtn",i.proxy(this.clickApply,this)).on("click.daterangepicker","button.cancelBtn",i.proxy(this.clickCancel,this)).on("click.daterangepicker","li",i.proxy(this.clickRange,this)).on("mouseenter.daterangepicker","li",i.proxy(this.hoverRange,this)).on("mouseleave.daterangepicker","li",i.proxy(this.updateFormInputs,this)),this.element.is("input")?this.element.on({"click.daterangepicker":i.proxy(this.show,this),"focus.daterangepicker":i.proxy(this.show,this),"keyup.daterangepicker":i.proxy(this.elementChanged,this),"keydown.daterangepicker":i.proxy(this.keydown,this)}):this.element.on("click.daterangepicker",i.proxy(this.toggle,this)),this.element.is("input")&&!this.singleDatePicker&&this.autoUpdateInput?(this.element.val(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format)),this.element.trigger("change")):this.element.is("input")&&this.autoUpdateInput&&(this.element.val(this.startDate.format(this.locale.format)),this.element.trigger("change"))};s.prototype={constructor:s,setStartDate:function(t){"string"==typeof t&&(this.startDate=a(t,this.locale.format)),"object"==typeof t&&(this.startDate=a(t)),this.timePicker||(this.startDate=this.startDate.startOf("day")),this.timePicker&&this.timePickerIncrement&&this.startDate.minute(Math.round(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement),this.minDate&&this.startDate.isBefore(this.minDate)&&(this.startDate=this.minDate),this.maxDate&&this.startDate.isAfter(this.maxDate)&&(this.startDate=this.maxDate),this.isShowing||this.updateElement(),this.updateMonthsInView()},setEndDate:function(t){"string"==typeof t&&(this.endDate=a(t,this.locale.format)),"object"==typeof t&&(this.endDate=a(t)),this.timePicker||(this.endDate=this.endDate.endOf("day")),this.timePicker&&this.timePickerIncrement&&this.endDate.minute(Math.round(this.endDate.minute()/this.timePickerIncrement)*this.timePickerIncrement),this.endDate.isBefore(this.startDate)&&(this.endDate=this.startDate.clone()),this.maxDate&&this.endDate.isAfter(this.maxDate)&&(this.endDate=this.maxDate),this.dateLimit&&this.startDate.clone().add(this.dateLimit).isBefore(this.endDate)&&(this.endDate=this.startDate.clone().add(this.dateLimit)),this.isShowing||this.updateElement(),this.updateMonthsInView()},isInvalidDate:function(){return!1},updateView:function(){this.timePicker&&(this.renderTimePicker("left"),this.renderTimePicker("right"),this.endDate?this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled"):this.container.find(".right .calendar-time select").attr("disabled","disabled").addClass("disabled")),this.endDate?(this.container.find('input[name="daterangepicker_end"]').removeClass("active"),this.container.find('input[name="daterangepicker_start"]').addClass("active")):(this.container.find('input[name="daterangepicker_end"]').addClass("active"),this.container.find('input[name="daterangepicker_start"]').removeClass("active")),this.updateMonthsInView(),this.updateCalendars(),this.updateFormInputs()},updateMonthsInView:function(){if(this.endDate){if(!this.singleDatePicker&&this.leftCalendar.month&&this.rightCalendar.month&&(this.startDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.startDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM"))&&(this.endDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.endDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM")))return;this.leftCalendar.month=this.startDate.clone().date(2),this.linkedCalendars||this.endDate.month()==this.startDate.month()&&this.endDate.year()==this.startDate.year()?this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month"):this.rightCalendar.month=this.endDate.clone().date(2)}else this.leftCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")&&this.rightCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")&&(this.leftCalendar.month=this.startDate.clone().date(2),this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month"))},updateCalendars:function(){if(this.timePicker){var t,e,a;if(this.endDate){if(t=parseInt(this.container.find(".left .hourselect").val(),10),e=parseInt(this.container.find(".left .minuteselect").val(),10),a=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0,!this.timePicker24Hour){var i=this.container.find(".left .ampmselect").val();"PM"===i&&12>t&&(t+=12),"AM"===i&&12===t&&(t=0)}}else if(t=parseInt(this.container.find(".right .hourselect").val(),10),e=parseInt(this.container.find(".right .minuteselect").val(),10),a=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0,!this.timePicker24Hour){var i=this.container.find(".left .ampmselect").val();"PM"===i&&12>t&&(t+=12),"AM"===i&&12===t&&(t=0)}this.leftCalendar.month.hour(t).minute(e).second(a),this.rightCalendar.month.hour(t).minute(e).second(a)}if(this.renderCalendar("left"),this.renderCalendar("right"),this.container.find(".ranges li").removeClass("active"),null!=this.endDate){var s=!0,n=0;for(var r in this.ranges){if(this.timePicker){if(this.startDate.isSame(this.ranges[r][0])&&this.endDate.isSame(this.ranges[r][1])){s=!1,this.chosenLabel=this.container.find(".ranges li:eq("+n+")").addClass("active").html();break}}else if(this.startDate.format("YYYY-MM-DD")==this.ranges[r][0].format("YYYY-MM-DD")&&this.endDate.format("YYYY-MM-DD")==this.ranges[r][1].format("YYYY-MM-DD")){s=!1,this.chosenLabel=this.container.find(".ranges li:eq("+n+")").addClass("active").html();break}n++}s&&(this.chosenLabel=this.container.find(".ranges li:last").addClass("active").html(),this.showCalendars())}},renderCalendar:function(t){var e="left"==t?this.leftCalendar:this.rightCalendar,s=e.month.month(),n=e.month.year(),r=e.month.hour(),h=e.month.minute(),l=e.month.second(),o=a([n,s]).daysInMonth(),c=a([n,s,1]),d=a([n,s,o]),m=a(c).subtract(1,"month").month(),f=a(c).subtract(1,"month").year(),p=a([f,m]).daysInMonth(),u=c.day(),e=[];e.firstDay=c,e.lastDay=d;for(var D=0;6>D;D++)e[D]=[];var g=p-u+this.locale.firstDay+1;g>p&&(g-=7),u==this.locale.firstDay&&(g=p-6);for(var k,y,v=a([f,m,g,12,h,l]),D=0,k=0,y=0;42>D;D++,k++,v=a(v).add(24,"hour"))D>0&&k%7===0&&(k=0,y++),e[y][k]=v.clone().hour(r).minute(h).second(l),v.hour(12),this.minDate&&e[y][k].format("YYYY-MM-DD")==this.minDate.format("YYYY-MM-DD")&&e[y][k].isBefore(this.minDate)&&"left"==t&&(e[y][k]=this.minDate.clone()),this.maxDate&&e[y][k].format("YYYY-MM-DD")==this.maxDate.format("YYYY-MM-DD")&&e[y][k].isAfter(this.maxDate)&&"right"==t&&(e[y][k]=this.maxDate.clone());"left"==t?this.leftCalendar.calendar=e:this.rightCalendar.calendar=e;var b="left"==t?this.minDate:this.startDate,C=this.maxDate,Y=("left"==t?this.startDate:this.endDate,'<table class="table-condensed">');Y+="<thead>",Y+="<tr>",this.showWeekNumbers&&(Y+="<th></th>"),Y+=b&&!b.isBefore(e.firstDay)||this.linkedCalendars&&"left"!=t?"<th></th>":'<th class="prev available"><i class="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th>';var P=this.locale.monthNames[e[1][1].month()]+e[1][1].format(" YYYY");if(this.showDropdowns){for(var w=e[1][1].month(),M=e[1][1].year(),x=C&&C.year()||M+5,I=b&&b.year()||M-50,L=M==I,A=M==x,S='<select class="monthselect">',_=0;12>_;_++)S+=(!L||_>=b.month())&&(!A||_<=C.month())?"<option value='"+_+"'"+(_===w?" selected='selected'":"")+">"+this.locale.monthNames[_]+"</option>":"<option value='"+_+"'"+(_===w?" selected='selected'":"")+" disabled='disabled'>"+this.locale.monthNames[_]+"</option>";S+="</select>";for(var B='<select class="yearselect">',E=I;x>=E;E++)B+='<option value="'+E+'"'+(E===M?' selected="selected"':"")+">"+E+"</option>";B+="</select>",P=S+B}if(Y+='<th colspan="5" class="month">'+P+"</th>",Y+=C&&!C.isAfter(e.lastDay)||this.linkedCalendars&&"right"!=t&&!this.singleDatePicker?"<th></th>":'<th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th>',Y+="</tr>",Y+="<tr>",this.showWeekNumbers&&(Y+='<th class="week">'+this.locale.weekLabel+"</th>"),i.each(this.locale.daysOfWeek,function(t,e){Y+="<th>"+e+"</th>"}),Y+="</tr>",Y+="</thead>",Y+="<tbody>",null==this.endDate&&this.dateLimit){var W=this.startDate.clone().add(this.dateLimit).endOf("day");(!C||W.isBefore(C))&&(C=W)}for(var y=0;6>y;y++){Y+="<tr>",this.showWeekNumbers&&(Y+='<td class="week">'+e[y][0].week()+"</td>");for(var k=0;7>k;k++){var j=[];e[y][k].isSame(new Date,"day")&&j.push("today"),e[y][k].isoWeekday()>5&&j.push("weekend"),e[y][k].month()!=e[1][1].month()&&j.push("off"),this.minDate&&e[y][k].isBefore(this.minDate,"day")&&j.push("off","disabled"),C&&e[y][k].isAfter(C,"day")&&j.push("off","disabled"),this.isInvalidDate(e[y][k])&&j.push("off","disabled"),e[y][k].format("YYYY-MM-DD")==this.startDate.format("YYYY-MM-DD")&&j.push("active","start-date"),null!=this.endDate&&e[y][k].format("YYYY-MM-DD")==this.endDate.format("YYYY-MM-DD")&&j.push("active","end-date"),null!=this.endDate&&e[y][k]>this.startDate&&e[y][k]<this.endDate&&j.push("in-range");for(var H="",O=!1,D=0;D<j.length;D++)H+=j[D]+" ","disabled"==j[D]&&(O=!0);O||(H+="available"),Y+='<td class="'+H.replace(/^\s+|\s+$/g,"")+'" data-title="r'+y+"c"+k+'">'+e[y][k].date()+"</td>"}Y+="</tr>"}Y+="</tbody>",Y+="</table>",this.container.find(".calendar."+t+" .calendar-table").html(Y)},renderTimePicker:function(t){var e,a,i,s=this.maxDate;!this.dateLimit||this.maxDate&&!this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)||(s=this.startDate.clone().add(this.dateLimit)),"left"==t?(a=this.startDate.clone(),i=this.minDate):"right"==t&&(a=this.endDate?this.endDate.clone():this.startDate.clone(),i=this.startDate),e='<select class="hourselect">';for(var n=this.timePicker24Hour?0:1,r=this.timePicker24Hour?23:12,h=n;r>=h;h++){var l=h;this.timePicker24Hour||(l=a.hour()>=12?12==h?12:h+12:12==h?0:h);var o=a.clone().hour(l),c=!1;i&&o.minute(59).isBefore(i)&&(c=!0),s&&o.minute(0).isAfter(s)&&(c=!0),e+=l!=a.hour()||c?c?'<option value="'+h+'" disabled="disabled" class="disabled">'+h+"</option>":'<option value="'+h+'">'+h+"</option>":'<option value="'+h+'" selected="selected">'+h+"</option>"}e+="</select> ",e+=': <select class="minuteselect">';for(var h=0;60>h;h+=this.timePickerIncrement){var d=10>h?"0"+h:h,o=a.clone().minute(h),c=!1;i&&o.second(59).isBefore(i)&&(c=!0),s&&o.second(0).isAfter(s)&&(c=!0),e+=a.minute()!=h||c?c?'<option value="'+h+'" disabled="disabled" class="disabled">'+d+"</option>":'<option value="'+h+'">'+d+"</option>":'<option value="'+h+'" selected="selected">'+d+"</option>"}if(e+="</select> ",this.timePickerSeconds){e+=': <select class="secondselect">';for(var h=0;60>h;h++){var d=10>h?"0"+h:h,o=a.clone().second(h),c=!1;i&&o.isBefore(i)&&(c=!0),s&&o.isAfter(s)&&(c=!0),e+=a.second()!=h||c?c?'<option value="'+h+'" disabled="disabled" class="disabled">'+d+"</option>":'<option value="'+h+'">'+d+"</option>":'<option value="'+h+'" selected="selected">'+d+"</option>"}e+="</select> "}if(!this.timePicker24Hour){e+='<select class="ampmselect">';var m="",f="";i&&a.clone().hour(12).minute(0).second(0).isBefore(i)&&(m=' disabled="disabled" class="disabled"'),s&&a.clone().hour(0).minute(0).second(0).isAfter(s)&&(f=' disabled="disabled" class="disabled"'),e+=a.hour()>=12?'<option value="AM"'+m+'>AM</option><option value="PM" selected="selected"'+f+">PM</option>":'<option value="AM" selected="selected"'+m+'>AM</option><option value="PM"'+f+">PM</option>",e+="</select>"}this.container.find(".calendar."+t+" .calendar-time div").html(e)},updateFormInputs:function(){this.container.find("input[name=daterangepicker_start]").is(":focus")||this.container.find("input[name=daterangepicker_end]").is(":focus")||(this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.locale.format)),this.endDate&&this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.locale.format)),this.singleDatePicker||this.endDate&&(this.startDate.isBefore(this.endDate)||this.startDate.isSame(this.endDate))?this.container.find("button.applyBtn").removeAttr("disabled"):this.container.find("button.applyBtn").attr("disabled","disabled"))},move:function(){var t,e={top:0,left:0},a=i(window).width();this.parentEl.is("body")||(e={top:this.parentEl.offset().top-this.parentEl.scrollTop(),left:this.parentEl.offset().left-this.parentEl.scrollLeft()},a=this.parentEl[0].clientWidth+this.parentEl.offset().left),t="up"==this.drops?this.element.offset().top-this.container.outerHeight()-e.top:this.element.offset().top+this.element.outerHeight()-e.top,this.container["up"==this.drops?"addClass":"removeClass"]("dropup"),"left"==this.opens?(this.container.css({top:t,right:a-this.element.offset().left-this.element.outerWidth(),left:"auto"}),this.container.offset().left<0&&this.container.css({right:"auto",left:9})):"center"==this.opens?(this.container.css({top:t,left:this.element.offset().left-e.left+this.element.outerWidth()/2-this.container.outerWidth()/2,right:"auto"}),this.container.offset().left<0&&this.container.css({right:"auto",left:9})):(this.container.css({top:t,left:this.element.offset().left-e.left,right:"auto"}),this.container.offset().left+this.container.outerWidth()>i(window).width()&&this.container.css({left:"auto",right:0}))},show:function(t){this.isShowing||(this._outsideClickProxy=i.proxy(function(t){this.outsideClick(t)},this),i(document).on("mousedown.daterangepicker",this._outsideClickProxy).on("touchend.daterangepicker",this._outsideClickProxy).on("click.daterangepicker","[data-toggle=dropdown]",this._outsideClickProxy).on("focusin.daterangepicker",this._outsideClickProxy),i(window).on("resize.daterangepicker",i.proxy(function(t){this.move(t)},this)),this.oldStartDate=this.startDate.clone(),this.oldEndDate=this.endDate.clone(),this.updateView(),this.container.show(),this.move(),this.element.trigger("show.daterangepicker",this),this.isShowing=!0)},hide:function(t){this.isShowing&&(this.endDate||(this.startDate=this.oldStartDate.clone(),this.endDate=this.oldEndDate.clone()),this.startDate.isSame(this.oldStartDate)&&this.endDate.isSame(this.oldEndDate)||this.callback(this.startDate,this.endDate,this.chosenLabel),this.updateElement(),i(document).off(".daterangepicker"),i(window).off(".daterangepicker"),this.container.hide(),this.element.trigger("hide.daterangepicker",this),this.isShowing=!1)},toggle:function(t){this.isShowing?this.hide():this.show()},outsideClick:function(t){var e=i(t.target);"focusin"==t.type||e.closest(this.element).length||e.closest(this.container).length||e.closest(".calendar-table").length||this.hide()},showCalendars:function(){this.container.addClass("show-calendar"),this.move(),this.element.trigger("showCalendar.daterangepicker",this)},hideCalendars:function(){this.container.removeClass("show-calendar"),this.element.trigger("hideCalendar.daterangepicker",this)},hoverRange:function(t){if(!this.container.find("input[name=daterangepicker_start]").is(":focus")&&!this.container.find("input[name=daterangepicker_end]").is(":focus")){var e=t.target.innerHTML;if(e==this.locale.customRangeLabel)this.updateView();else{var a=this.ranges[e];this.container.find("input[name=daterangepicker_start]").val(a[0].format(this.locale.format)),this.container.find("input[name=daterangepicker_end]").val(a[1].format(this.locale.format))}}},clickRange:function(t){var e=t.target.innerHTML;if(this.chosenLabel=e,e==this.locale.customRangeLabel)this.showCalendars();else{var a=this.ranges[e];this.startDate=a[0],this.endDate=a[1],this.timePicker||(this.startDate.startOf("day"),this.endDate.endOf("day")),this.hideCalendars(),this.clickApply()}},clickPrev:function(t){var e=i(t.target).parents(".calendar");e.hasClass("left")?(this.leftCalendar.month.subtract(1,"month"),this.linkedCalendars&&this.rightCalendar.month.subtract(1,"month")):this.rightCalendar.month.subtract(1,"month"),this.updateCalendars()},clickNext:function(t){var e=i(t.target).parents(".calendar");e.hasClass("left")?this.leftCalendar.month.add(1,"month"):(this.rightCalendar.month.add(1,"month"),this.linkedCalendars&&this.leftCalendar.month.add(1,"month")),this.updateCalendars()},hoverDate:function(t){if(!this.container.find("input[name=daterangepicker_start]").is(":focus")&&!this.container.find("input[name=daterangepicker_end]").is(":focus")&&i(t.target).hasClass("available")){var e=i(t.target).attr("data-title"),a=e.substr(1,1),s=e.substr(3,1),n=i(t.target).parents(".calendar"),r=n.hasClass("left")?this.leftCalendar.calendar[a][s]:this.rightCalendar.calendar[a][s];this.endDate?this.container.find("input[name=daterangepicker_start]").val(r.format(this.locale.format)):this.container.find("input[name=daterangepicker_end]").val(r.format(this.locale.format));var h=this.leftCalendar,l=this.rightCalendar,o=this.startDate;this.endDate||this.container.find(".calendar td").each(function(t,e){if(!i(e).hasClass("week")){var a=i(e).attr("data-title"),s=a.substr(1,1),n=a.substr(3,1),c=i(e).parents(".calendar"),d=c.hasClass("left")?h.calendar[s][n]:l.calendar[s][n];d.isAfter(o)&&d.isBefore(r)?i(e).addClass("in-range"):i(e).removeClass("in-range")}})}},clickDate:function(t){if(i(t.target).hasClass("available")){var e=i(t.target).attr("data-title"),a=e.substr(1,1),s=e.substr(3,1),n=i(t.target).parents(".calendar"),r=n.hasClass("left")?this.leftCalendar.calendar[a][s]:this.rightCalendar.calendar[a][s];if(this.endDate||r.isBefore(this.startDate)){if(this.timePicker){var h=parseInt(this.container.find(".left .hourselect").val(),10);if(!this.timePicker24Hour){var l=n.find(".ampmselect").val();"PM"===l&&12>h&&(h+=12),"AM"===l&&12===h&&(h=0)}var o=parseInt(this.container.find(".left .minuteselect").val(),10),c=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0;r=r.clone().hour(h).minute(o).second(c)}this.endDate=null,this.setStartDate(r.clone())}else{if(this.timePicker){var h=parseInt(this.container.find(".right .hourselect").val(),10);if(!this.timePicker24Hour){var l=this.container.find(".right .ampmselect").val();"PM"===l&&12>h&&(h+=12),"AM"===l&&12===h&&(h=0)}var o=parseInt(this.container.find(".right .minuteselect").val(),10),c=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0;r=r.clone().hour(h).minute(o).second(c)}this.setEndDate(r.clone()),this.autoApply&&this.clickApply()}this.singleDatePicker&&(this.setEndDate(this.startDate),this.timePicker||this.clickApply()),this.updateView()}},clickApply:function(t){this.hide(),this.element.trigger("apply.daterangepicker",this)},clickCancel:function(t){this.startDate=this.oldStartDate,this.endDate=this.oldEndDate,this.hide(),this.element.trigger("cancel.daterangepicker",this)},monthOrYearChanged:function(t){var e=i(t.target).closest(".calendar").hasClass("left"),a=e?"left":"right",s=this.container.find(".calendar."+a),n=parseInt(s.find(".monthselect").val(),10),r=s.find(".yearselect").val();e||(r<this.startDate.year()||r==this.startDate.year()&&n<this.startDate.month())&&(n=this.startDate.month(),r=this.startDate.year()),this.minDate&&(r<this.minDate.year()||r==this.minDate.year()&&n<this.minDate.month())&&(n=this.minDate.month(),r=this.minDate.year()),this.maxDate&&(r>this.maxDate.year()||r==this.maxDate.year()&&n>this.maxDate.month())&&(n=this.maxDate.month(),r=this.maxDate.year()),e?(this.leftCalendar.month.month(n).year(r),this.linkedCalendars&&(this.rightCalendar.month=this.leftCalendar.month.clone().add(1,"month"))):(this.rightCalendar.month.month(n).year(r),this.linkedCalendars&&(this.leftCalendar.month=this.rightCalendar.month.clone().subtract(1,"month"))),this.updateCalendars()},timeChanged:function(t){var e=i(t.target).closest(".calendar"),a=e.hasClass("left"),s=parseInt(e.find(".hourselect").val(),10),n=parseInt(e.find(".minuteselect").val(),10),r=this.timePickerSeconds?parseInt(e.find(".secondselect").val(),10):0;if(!this.timePicker24Hour){var h=e.find(".ampmselect").val();"PM"===h&&12>s&&(s+=12),"AM"===h&&12===s&&(s=0)}if(a){var l=this.startDate.clone();l.hour(s),l.minute(n),l.second(r),this.setStartDate(l),this.singleDatePicker?this.endDate=this.startDate.clone():this.endDate&&this.endDate.format("YYYY-MM-DD")==l.format("YYYY-MM-DD")&&this.endDate.isBefore(l)&&this.setEndDate(l.clone())}else if(this.endDate){var o=this.endDate.clone();o.hour(s),o.minute(n),o.second(r),this.setEndDate(o)}this.updateCalendars(),this.updateFormInputs(),this.renderTimePicker("left"),this.renderTimePicker("right")},formInputsChanged:function(t){var e=i(t.target).closest(".calendar").hasClass("right"),s=a(this.container.find('input[name="daterangepicker_start"]').val(),this.locale.format),n=a(this.container.find('input[name="daterangepicker_end"]').val(),this.locale.format);s.isValid()&&n.isValid()&&(e&&n.isBefore(s)&&(s=n.clone()),this.setStartDate(s),this.setEndDate(n),e?this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format)):this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format))),this.updateCalendars(),this.timePicker&&(this.renderTimePicker("left"),this.renderTimePicker("right"))},elementChanged:function(){if(this.element.is("input")&&this.element.val().length&&!(this.element.val().length<this.locale.format.length)){var t=this.element.val().split(this.locale.separator),e=null,i=null;2===t.length&&(e=a(t[0],this.locale.format),i=a(t[1],this.locale.format)),(this.singleDatePicker||null===e||null===i)&&(e=a(this.element.val(),this.locale.format),i=e),e.isValid()&&i.isValid()&&(this.setStartDate(e),this.setEndDate(i),this.updateView())}},keydown:function(t){(9===t.keyCode||13===t.keyCode)&&this.hide()},updateElement:function(){this.element.is("input")&&!this.singleDatePicker&&this.autoUpdateInput?(this.element.val(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format)),this.element.trigger("change")):this.element.is("input")&&this.autoUpdateInput&&(this.element.val(this.startDate.format(this.locale.format)),this.element.trigger("change"))},remove:function(){this.container.remove(),this.element.off(".daterangepicker"),this.element.removeData()}},i.fn.daterangepicker=function(t,e){return this.each(function(){var a=i(this);a.data("daterangepicker")&&a.data("daterangepicker").remove(),a.data("daterangepicker",new s(a,t,e))}),this}});