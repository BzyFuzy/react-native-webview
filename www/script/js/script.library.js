/* @Author lee jun */
function loadingEvent(){
	$(function(){
		var obj = $(".loading");
		$("body").append(' <div class="loading"><div class="loading_cell"><div><div><i></i><i></i><i></i><i></i></div></div><div><img src="../images/loading_logo.png" alt="리팜"></div></div></div> ');

		windowSize();

		$(window).resize(function(){
			windowSize();
		});
		
		function windowSize(){
			var mh = $(window).outerHeight();
			obj.css({height:mh+"px"});
		}
	});
}

function onpop(urls,w,h){
	$(function(){
		sw = (screen.width);
		sh = (screen.height);
		
		if(jQuery.browser.msie && jQuery.browser.version == "11.0" || jQuery.browser.version == "10.0" || jQuery.browser.version == "9.0"){	//학습창 IE버전별 교정
			w = (w-4);
			h = (h-4);
		}
		
		size = "width="+w+",height="+h+",scrollbars=yes";
		var pop_view = window.open(urls,'',size);
		pop_view.focus();
	});
}

function leadingZeros(n, digits) {
	var zero = '';
	n = n.toString();

	if (n.length < digits) {
		for (var i = 0; i < digits - n.length; i++) {
			zero += '0';
		}
	}
	return zero + n;
}

function commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function convertTime(time) {
	var getTime = time.substring(0, 2);
	var intTime = parseInt(getTime);
	
	if (intTime < 12 ) { var str = '오전 '; } else { var str = '오후 '; }
	if (intTime == 12) { var cvHour = intTime; } else { var cvHour = intTime%12; }
	
	var res = str + ('0' + cvHour).slice(-2) + time.slice(-3);
	return res; 
}

$(function(){
	$(".date").datepicker({
		dateFormat: 'yy.mm.dd',
		prevText : '이전 달',
		nextText : '다음 달',
		monthNames : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames : ['일','월','화','수','목','금','토'],
		dayNamesShort : ['일','월','화','수','목','금','토'],
		dayNamesMin : ['일','월','화','수','목','금','토'],
		showMonthAfterYear : true,
		showOtherMonths : true,
		yearSuffix : '년'
	});
	
	
	var d = $(".d");
	var dd = new Array('전체','주중','주말','월','화','수','목','금','토','일','공휴일');
	for(i = 0; i < dd.length; i++) {
		d.append(' <option asc="'+(i+1)+'" value="'+dd[i]+'">'+dd[i]+'</option> ');
	}
	
	var d = $(".d_week");
	var dd = new Array('월','화','수','목','금','토','일','공휴일');
	for(i = 0; i < dd.length; i++) {
		d.append(' <option asc="'+(i+1)+'" value="'+dd[i]+'">'+dd[i]+'</option> ');
	}
	
	var h = $(".h");
	for(i = 1; i <= 24; i++) {
		i =  leadingZeros(i, 2);
		h.append(' <option value="'+i+'">'+i+'시</option> ');
	}
	
	var m = $(".m");
	var mm = 5;
	m.append(' <option value="00">: 00</option> ');
	for(i = 1; i < 12; i++) {
		var pirMin = leadingZeros(mm*i, 2);
		m.append(' <option value="'+pirMin+'">: '+pirMin+'</option> ');
	}
});