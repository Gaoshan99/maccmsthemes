islogin=0;
function checkcookie(){
	if(document.cookie.indexOf('auth=')>=0){
		islogin=1;
		return true;
	}
	return false;
}
checkcookie();
$(function($){
    $.fn.changeList = function(options){	
        var defaults = {
                    tag : 'li', // tab name
                    subName : '.utilTabSub', // sub class name
                    eventType : 'click', // event type
                    num : 4,
                    showType : 'show' // show effect type
                },
                opts = $.extend({}, defaults, options),
                that = $(this),
                subUl = that.find(opts.subName),
                subItems = subUl.find('li'),
                size = subItems.length,
                liW = subItems.outerWidth(true),
                ulW = liW * size,
                page = size + 1,
                n = opts.num,
                randNum = 0,
                m = 0;

        if(size > n){
            that.find(opts.tag)[opts.eventType](function() {
                randNum = mathRand(n, size);
                subItems.hide();
                $.each(randNum, function (i, el) {
                    subItems.eq(el).fadeIn(800);
                });
            });
        }
    };
}(jQuery));
$(document).ready(function(){
		$(window).on('scroll',function(){
		var st = $(document).scrollTop();
		if( st>0 ){
			if( $('#main-container').length != 0  ){
				var w = $(window).width(),mw = $('#main-container').width();
				if( (w-mw)/2 > 70 )
					$('#index-top').css({'left':(w-mw)/2+mw+20});
				else{
					$('#index-top').css({'left':'auto'});
				}
			}
			$('#index-top').fadeIn(function(){
				$(this).removeClass('wmin');
			});
		}else{
			$('#index-top').fadeOut(function(){
				$(this).addClass('wmin');
			});
		}	
	});
	$('#index-top .top').on('click',function(){
		$('html,body').animate({'scrollTop':0},500);
	});
	$('#index-top .qrcode_box').hover(function(){
		$('#index-top .qrcode').removeClass('wmin');
	},function(){
		$('#index-top .qrcode').addClass('wmin');
	});					   
    var prevpage=$("#pre").attr("href"); 
    var nextpage=$("#next").attr("href"); 
    $("body").keydown(function(event){ 
      if(event.keyCode==37 && prevpage!=undefined) location=prevpage; 
      if(event.keyCode==39 && nextpage!=undefined) location=nextpage; 
    }); 
	 timer2 = null;
   $(".qr-code-ico").hover(function(){
        clearTimeout(timer2);
        $(this).addClass("qr-code-ico-hover");
        $(".qr-code").show();
    },function(){
        $(this).removeClass("qr-code-ico-hover");
        timer2 = setTimeout($.proxy(function() {
            $(".qr-code").hide();
        }, this),100);
    });
	$(".qr-code").hover(function(){
		clearTimeout(timer2);
		$(this).show();
	},function(){
		$(this).hide();
	});	
	//内容页面播放列表切换
	$(".play-title ul li a").each(function(j,div){
			$(this).click(function(){
		//$("html,body").animate({scrollTop:$("#"+listid).offset().top}, 500); //我要平滑
		        if ($(this).parent().hasClass("current") ){
					return;
                }
				$(this).parent().nextAll().removeClass("current");
				$(this).parent().prevAll().removeClass("current");
				$(this).parent().addClass("current")
				$('.details-con2-body').hide().css("opacity",0);
				$('.details-con2-body:eq('+j+')').show().animate({"opacity":"1"});
	});		
	});
 $('.actor_list .more').find('a').live('click', function(e){
        e.preventDefault();
        var self = $(this),
            allNum = self.attr('re'),
            sta = self.attr('sta'),
            hideItem = $('.actor_list ul').find('li[rel="h"]');
        if(sta == undefined || sta == 0){
            hideItem.show(500);
            self.text('收起部分角色');
            self.attr('sta', 1);
        }
        else{
            hideItem.hide(500);
            self.text('查看全部'+allNum+'角色');
            self.attr('sta', 0);
        }

    });	
  $('.actor-info .more').find('a').live('click', function(e){
        e.preventDefault();
        var self = $(this),
            allNum = self.attr('re'),
            sta = self.attr('sta'),
            hideItem = $('.actor-info ul').find('li[rel="h"]');
        if(sta == undefined || sta == 0){
            hideItem.show(500);
            self.text('收起');
            self.attr('sta', 1);
        }
        else{
            hideItem.hide(500);
            self.text('查看全部'+allNum+'角色');
            self.attr('sta', 0);
        }

    }); 	
//内容播放页面排序
  $('.order a').click(function(){
		if($(this).hasClass('asc')){
			$(this).removeClass('asc').addClass('desc').text('降序');
		}else{
			$(this).removeClass('desc').addClass('asc').text('升序');
		}
		var a=$('.play-box:eq('+$(this).attr('data')+') .player_list');
		var b=$('.play-box:eq('+$(this).attr('data')+') .player_list a');
		a.html(b.get().reverse());
	});

$(".play-tool span.s1").click(function() {					 
		$html = $(this).html();
		try {
			if ($html == '关灯') {
				$(this).html('开灯')
			} else {
				$(this).html('关灯')
			}
		} catch (e) {}
		$(".playopen").toggle(300);
		$(".play-tool").toggleClass("son");
		$(".player-box").toggleClass("top")
	});
	$(".play-tool span.s2").click(function() {
		$html = $(this).html();
		try {
			if ($html == '关闭广告') {
				$(this).html('显示广告')
			} else {
				$(this).html('关闭广告')
			}
		} catch (e) {}
		$(".player-right").toggleClass("adon");
		$(".player_zanpian ").toggleClass("playall");
		$(".player_zanpian ").toggleClass("w900");
		$(this).toggleClass("son")
	});	
	$(".player-num .info").click(function() {	
		$html = $(this).html();
		$(".player-vinfo").toggle(300);
		$(".player-num a.info").toggleClass("on");
	});
	$(".els-ico a.s-btn").click(function() {	
		$html = $(this).html();
		$(".els-sharebox").toggle(300);
		$(".els-ico a.s-btn").toggleClass("on");
		if (window.clipboardData) {
	    $("#tips").hide();		
		}
	});
    //播放记录
	$("#nav-looked").hover(function(){						
		$(this).find(".watch-list").show();
	},function(){
		timer2 = setTimeout($.proxy(function() {
            $(this).find(".watch-list").hide();
        }, this),100);
		
		
	});	
	$(".close-his").click(function(){
		$(this).parents(".watch-list").hide();
	});
	//登录
   $("#loginbarx").hover(function(){
        clearTimeout(timer2);
        $(".drop-box").show();
    },function(){
        timer2 = setTimeout($.proxy(function() {
            $(".drop-box").hide();
        }, this),100);
    });
 /**表情***/
    if ($(".emotion").length > 0) {
        $(".emotion").on('click', function(){
            var left = $(this).offset().left;
            var top = $(this).offset().top;
            var id = $(this).attr("data-id");
            $("#smileBoxOuter").css({
                "left": left,
                "top": top + 20
            }).show().attr("data-id", id)
        });
        $("#smileBoxOuter,.emotion").hover(function() {
            $("#smileBoxOuter").attr("is-hover", 1)
        },
                function() {
                    $("#smileBoxOuter").attr("is-hover", 0)
                });
        $(".emotion,#smileBoxOuter").blur(function() {
            var is_hover = $("#smileBoxOuter").attr("is-hover");
            if (is_hover != 1) {
                $("#smileBoxOuter").hide()
            }
        });
        $(".smileBox").find("a").click(function() {
            var textarea_id = $("#smileBoxOuter").attr("data-id");
            var textarea_obj = $("#reply_" + textarea_id).find("textarea");
            var textarea_val = textarea_obj.val();
            if (textarea_val == "发布评论") {
                textarea_obj.val("")
            }
            var title = "[" + $(this).attr("title") + "]";
            textarea_obj.val(textarea_obj.val() + title).focus();
            $("#smileBoxOuter").hide()
        });
        $("#smileBoxOuter").find(".smilePage").children("a").click(function() {
            $(this).addClass("current").siblings("a").removeClass("current");
            var index = $(this).index();
            $("#smileBoxOuter").find(".smileBox").eq(index).show().siblings(".smileBox").hide()
        });
        $(".comment_blockquote").hover(function() {
            $(".comment_action_sub").css({
                "visibility": "hidden"
            });
            $(this).find(".comment_action_sub").css({
                "visibility": "visible"
            })
        }, function() {
            $(".comment_action_sub").css({
                "visibility": "hidden"
            })
        })
    }		   
    //点击展开显示更多
  if ($('.synopsis-article').get(0)) {
  //获取其内容
  var synopsis = $('.synopsis-article');
  var synopsisHtml = synopsis.html();
  var synopsisLen = synopsisHtml.length;
  var num = 0;
  var unfold = '... <a class="unfold-btn" href="javascript:;">展开&gt;&gt;</a>';
  var packUp = ' <a class="unfold-btn" href="javascript:;">收起&gt;&gt;</a>';
  var detailsContent =  $('.details-content');
  //如果大于这个数的话更多按钮才显示.
  if ( synopsisLen > 80 ) {
    var result =  synopsisHtml.substr(0,80);
    synopsis.html(result + unfold);
  }
      //展开按钮
     var btn = $('.unfold-btn');
      btn.live('click',function(){
        num++;
      if ( num%2 == 0 ) {
         synopsis.html(result + unfold);
         /*synopsis.css('margin-bottom','');
         detailsContent.css('height','');*/
          }else{
         synopsis.html(synopsisHtml+packUp);
         /*synopsis.css('margin-bottom','61px');
         detailsContent.css('height','auto');*/
       }
     });
  };
    if ($('.vod-jj').get(0)) {
  //获取其内容
  var synopsis = $('.vod-jj');
  var synopsisHtml = synopsis.html();
  var synopsisLen = synopsisHtml.length;
  var num = 0;
  var unfold = '... <a class="unfold-btn" href="javascript:;">展开&gt;&gt;</a>';
  var packUp = ' <a class="unfold-btn" href="javascript:;">收起&gt;&gt;</a>';
  var detailsContent =  $('.details-content');
  //如果大于这个数的话更多按钮才显示.
  if ( synopsisLen > 180 ) {
    var result =  synopsisHtml.substr(0,180);
    synopsis.html(result + unfold);
  }
      //展开按钮
     var btn = $('.unfold-btn');
      btn.live('click',function(){
        num++;
      if ( num%2 == 0 ) {
         synopsis.html(result + unfold);
         /*synopsis.css('margin-bottom','');
         detailsContent.css('height','');*/
          }else{
         synopsis.html(synopsisHtml+packUp);
         /*synopsis.css('margin-bottom','61px');
         detailsContent.css('height','auto');*/
       }
     });
  };
    if ($('.special-txt').get(0)) {
  //获取其内容
  var synopsis = $('.special-txt');
  var synopsisHtml = synopsis.html();
  var synopsisLen = synopsisHtml.length;
  var num = 0;
  var unfold = '... <a class="unfold-btn" href="javascript:;">展开&gt;&gt;</a>';
  var packUp = ' <a class="unfold-btn" href="javascript:;">收起&gt;&gt;</a>';
  var detailsContent =  $('.details-content');
  //如果大于这个数的话更多按钮才显示.
  if ( synopsisLen > 260 ) {
    var result =  synopsisHtml.substr(0,260);
    synopsis.html(result + unfold);
  }
      //展开按钮
     var btn = $('.unfold-btn');
      btn.live('click',function(){
        num++;
      if ( num%2 == 0 ) {
         synopsis.html(result + unfold);
         /*synopsis.css('margin-bottom','');
         detailsContent.css('height','');*/
          }else{
         synopsis.html(synopsisHtml+packUp);
         /*synopsis.css('margin-bottom','61px');
         detailsContent.css('height','auto');*/
       }
     });
  };
// 下载展开收缩
		if($("#downul").length > 0)
	{
		if($("#downul")[0].scrollHeight>305)
		{
			$("#downzk").show();
			$("#downul").height(230);
			$("#downzk").click(function(e){
			if($(this).hasClass('ss')){
			$(this).removeClass('ss').addClass('zk').text('展开全部');
		}else{
			$(this).removeClass('zk').addClass('ss').text('收缩部分');
		}						
				if($("#downul").height()>305)
				{
					var h = $("#downul")[0].scrollHeight;
					$("#downul").height(230);
					
				}
				else
				{
					var h = $("#downul")[0].scrollHeight;
					$("#downul").height(h);
				}
				e.preventDefault(); 
			});
		}
	}
	$("#loginbarx").hover(function(){	   
		$(this).find(".drop-box").show();
	},function(){
		$(this).find(".drop-box").hide();
	});	
	$("#login2").click(function(){								
		$.colorbox({
        inline: true,
        href: "#login-dialog",
        width: '570px',
		height: '415px'

    });});	
});
// 全站通栏模块切换
function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"current":"";
		con.style.display=i==cursel?"block":"none";
	}
}

var WidthScreen = true;

function series(div,n1,n2){     //更多剧集方法
	var len = div.find("a").length;
	var n = WidthScreen ? n1:n2;
	if(len>100){    //超过100集时的方法
		var Nps = Math.ceil(len/100);    //得出百的倍数
		for(var i=0;i<Nps;i++){    //添加节点n个百集节点
			div.append("<div class='fortab'></div>");
		}
		for(var j=1;j<=Nps;j++){    //将所有剧集移到对应的fortab节点
			var ln = j==Nps ? len-Nps*100+100:100;
			div.find("a:lt("+ln+")").appendTo(div.find(".fortab").eq(j-1));
		}
		if(typeof TooLength != "undefined"){TooLength++;}    //增加太长id号
		else{window.TooLength = 1;}    //未定义id号是设为1
		$("body").append("<div class='Df' id='TooLength"+TooLength+"' style='display:none'></div>");    //添加id节点，将移入div用来默认显示
		div.find("a:lt("+(n2+18)+")").clone().appendTo($("#TooLength"+TooLength));    //添加前面集数
		div.find("a:gt("+(len-((n1/2)-2)/2-1)+")").clone().appendTo($("#TooLength"+TooLength));    //添加后面几集
		$("#TooLength"+TooLength).prependTo(div);    //默认显示id移入div
		div.find(".Df").show();
		var opBtn = "<a target='_self' href='javascript:void(0)' class='more Open'>更多剧集</a>";    //给默认显示盒加个open按钮
		div.find(".Df a").eq(n2+17).after(opBtn);    //添加open按钮
		var closeBtn = "<a target='_self' href='javascript:void(0)' class='more Close'>收&nbsp;&nbsp;起</a>";
		for(var k=0;k<Nps;k++){div.find(".fortab").eq(k).append(closeBtn);}    //给所有fortab盒子加close按钮
		var Navs = "<div class='play_navs clearfix' style='display:none;'>";    //创建第n-n+100的导航栏节点
		for(var l=0;l<Nps;l++){
			var min = l*100+1;
			var max = l==Nps-1 ? len:(l+1)*100;
			if(l==0){Navs += "<a target='_self' href='javascript:void(0)' class='more active'>"+min+"-"+max+"</a>";}
			else{Navs += "<a target='_self' href='javascript:void(0)' class='more'>"+min+"-"+max+"</a>";}
		}
		Navs += "</div>";
		div.find(".Df").after(Navs);    //添加导航节点，html结构到此完善
		var showPg = 0;    //默认页为0,即第一页，下面的是方法
		var DfBox = div.find(".Df");
		var navBox = div.find(".play_navs");
		var tabBox = div.find(".fortab");
		div.find(".Open").click(function(){
			DfBox.hide();
			navBox.show();
			tabBox.eq(showPg).show();
		});
		div.find(".Close").click(function(){
			DfBox.show();
			navBox.hide();
			tabBox.eq(showPg).hide();
		});
		div.find(".play_navs a").click(function(){
			if($(this).hasClass("active")) return;
			var _i = $(this).index();
			tabBox.eq(showPg).hide();
			tabBox.eq(_i).show();
			$(this).addClass("active").siblings(".active").removeClass("active");
			showPg = _i;
		})
		div.css("height","auto");
	}
	else if(len>n){
		for(var i=n2+18;i<len-((n1/2)-2)/2;i++){div.find("a").eq(i).addClass("Hide");}
		var t_m = "<a target='_self' href='javascript:void(0)' class='more'>更多剧集</a>";
		div.find("a").eq(n2+17).after(t_m);
		var more = div.find(".more");
		var _open = false;
		div.css("height","auto");
		more.click(function(){
			if(_open){
				div.find(".Hide").hide();
				$(this).html("更多剧集");
				$(this).insertAfter(div.find("a").eq(n2+17));
				_open = false;
			}
			else{
				div.find(".Hide").show();
				$(this).html("收&nbsp;&nbsp;起");
				$(this).insertAfter(div.find("a:last"));
				_open = true;
			}
		})
	}
}

function story(div,n1,n2){     //更多剧集方法
	var len = div.find("li").length;
	var n = WidthScreen ? n1:n2;
	if(len>50){    //超过100集时的方法
		var Nps = Math.ceil(len/50);    //得出百的倍数
		for(var i=0;i<Nps;i++){    //添加节点n个百集节点
			div.append("<div class='fortab'></div>");
		}
		for(var j=1;j<=Nps;j++){    //将所有剧集移到对应的fortab节点
			var ln = j==Nps ? len-Nps*50+50:50;
			div.find("li:lt("+ln+")").appendTo(div.find(".fortab").eq(j-1));
		}
		if(typeof TooLength != "undefined"){TooLength++;}    //增加太长id号
		else{window.TooLength = 1;}    //未定义id号是设为1
		$("body").append("<div class='Df' id='TooLength"+TooLength+"' style='display:none'></div>");    //添加id节点，将移入div用来默认显示
		div.find("li:lt("+(n2+19)+")").clone().appendTo($("#TooLength"+TooLength));    //添加前面集数
		div.find("li:gt("+(len-((n1/2)-2)/2-1)+")").clone().appendTo($("#TooLength"+TooLength));    //添加后面几集
		$("#TooLength"+TooLength).prependTo(div);    //默认显示id移入div
		div.find(".Df").show();
		var opBtn = "<li class='Open'><a target='_self' href='javascript:void(0)' class='more '>更多剧情</a></li>";    //给默认显示盒加个open按钮
		div.find(".Df li").eq(n2+18).after(opBtn);    //添加open按钮
		var closeBtn = "<li><a target='_self' href='javascript:void(0)' class='more Close'>收&nbsp;&nbsp;起</a></li>";
		for(var k=0;k<Nps;k++){div.find(".fortab").eq(k).append(closeBtn);}    //给所有fortab盒子加close按钮
		var Navs = "<div class='play_navs clearfix' style='display:none;'>";    //创建第n-n+100的导航栏节点
		for(var l=0;l<Nps;l++){
			var min = l*50+1;
			var max = l==Nps-1 ? len:(l+1)*50;
			if(l==0){Navs += "<a target='_self' href='javascript:void(0)' class='more active'>0"+min+"集-"+max+"集</a>";}
			else{Navs += "<a target='_self' href='javascript:void(0)' class='more'>"+min+"集-"+max+"集</a>";}
		}
		Navs += "</div>";
		div.find(".Df").after(Navs);    //添加导航节点，html结构到此完善
		var showPg = 0;    //默认页为0,即第一页，下面的是方法
		var DfBox = div.find(".Df");
		var navBox = div.find(".play_navs");
		var tabBox = div.find(".fortab");
		div.find(".Open").click(function(){
			DfBox.hide();
			navBox.show();
			tabBox.eq(showPg).show();
		});
		div.find(".Close").click(function(){
			DfBox.show();
			navBox.hide();
			tabBox.eq(showPg).hide();
		});
		div.find(".play_navs a").click(function(){
			if($(this).hasClass("active")) return;
			var _i = $(this).index();
			tabBox.eq(showPg).hide();
			tabBox.eq(_i).show();
			$(this).addClass("active").siblings(".active").removeClass("active");
			showPg = _i;
		})
		div.css("height","auto");
	}
	else if(len>n){
		for(var i=n2+19;i<len-((n1/2)-2)/2;i++){div.find("li").eq(i).addClass("Hide");}
		var t_m = "<li class='more'><a target='_self' href='javascript:void(0)'>更多剧集</a></li>";
		div.find("li").eq(n2+18).after(t_m);
		var more = div.find(".more");
		var _open = false;
		div.css("height","auto");
		more.click(function(){
			if(_open){
				div.find(".Hide").hide();
				$(this).html("更多剧集");
				$(this).insertAfter(div.find("li").eq(n2+18));
				_open = false;
			}
			else{
				div.find(".Hide").show();
				$(this).html("收&nbsp;&nbsp;起");
				$(this).insertAfter(div.find("li:last"));
				_open = true;
			}
		})
	}
}