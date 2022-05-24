var preload     = new Array;
var periodic;
var thumb       = 1;
var thumbs      = 20;
var url         = null;
var j           = 0;
var close 		= '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>';

function showLoginModal() {
	$.get(base_url + '/ajax.php?s=user_login', function(response) {
		$("#login-container").html(response);
		$("#login-modal").modal();
	});
}

function submitLogin()
{
	var username	= $("input[name='username']").val();
	var password	= $("input[name='password']").val();
	var remember	= $("input[name='remember']:checked").val();
		
    $.ajax({
        url: base_url + '/ajax.php?s=user_login',
        cache: false,
  		type: "POST",
        dataType: "json",
        data: {username: username, password: password, remember: remember, url: cur_url},
        success: function(response) {
      		$("#response").html(response.msg);
          	if (response.status == '1') {
          		$("#response").removeClass('alert-danger').addClass('alert-success');
          			
          		setTimeout(function() {
          			window.location = cur_url;
          		}, 500);
          	} else {
          		$("#response").removeClass('alert-success').addClass('alert-danger');
          	}

          	$("#response").show();
        }
    });
}

function changeThumb(id, vid)
{
	if (j === thumbs) {return;}
    document.getElementById(id).src = url + (j+1) + '.jpg';
    j = (j+1) % thumbs;
}

function startThumbRotation(id, src)
{
	var arr	= id.split('-');
	var vid     = arr[1];    
    thumb       = arr[2];
    thumbs      = arr[3];
    url         = tmb_url + src.match(/\/\d+\/\d+\/\d+\//);

    if (thumbs <= 1) { return; }

    for (var i=1; i<thumbs; i++) {
  		if (i === (thumbs+1)) { break; }
    
        preload[i]      = new Image;
        preload[i].src  = url + i + '.jpg';
    }

    periodic = window.setInterval("changeThumb('" + id + "','" + vid + "')", 500);
}

function endThumbRotation(id, src)
{
    window.clearInterval(periodic);
    
    $("img#" + id).attr('src', url + thumb + '.jpg');
}

function submitSearch()
{
	var query   = $("input[name='s']").val().replace(/\ /g, '+');
	if (query == '') {
		return false;
	}
	
	var action	= $("form[id='search-form']").attr('action');
	if (action == rel_url + '/search/community/') {
        window.location = base_url + '/community/?username=' + query;
    } else {
        window.location = action + '?s=' + query;
    }
}

$(document).ready(function() {
	if (age_check == '1') {
		var age_check_cookie = document.cookie.indexOf("age_check");
        if (age_check_cookie <= 0) {
			$.get(base_url + '/ajax.php?s=enter', function(response) {
				$("#login-container").html(response);
				$("#enter-modal").modal();
			});
		}
	}

	$("#login-container").on('click', '#enter-submit', function(e) {
		e.preventDefault();
		
		var expire = new Date();
        expire.setMonth(expire.getMonth() + 12);
        document.cookie = 'age_check=1; expires=' + expire.toGMTString() + '; path=/;';
		
		$("#enter-modal").modal('hide');
	});
	
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});

	$('.btn-group [title]').tooltip({
		container: 'body'
	})	

	$(".close-parent").click(function(e) {
		$(this).parent().hide();
	});
	
	$("a[class^='search-in-']").click(function(e) {
		e.preventDefault();
		
		$("#search-icon").removeClass().addClass($(this).find('i').attr('class'));
		$("#search-form").attr('action', rel_url + '/search/' + $(this).attr('class').replace('search-in-', '') + '/');
	});
	
	$("button[id='search']").click(function(e) {
		submitSearch();		
	});
	
	$("input[name='s']").keypress(function(e) {
        if (e.which == 13) {
      		submitSearch();
        }
	});
	
	$(".login").click(function(e) {
		e.preventDefault();
		
		showLoginModal();
	});
	
	$("#response-container").on('click', '.login', function(e) {
		e.preventDefault();		
		showLoginModal();		
	});
			
	$("#login-container").on('click', '#login-submit', function(e) {
		e.preventDefault();
		submitLogin();	
	});
	
	$("#login-container").on('keypress', '#username', function(e) {
		if (e.which == 13) {
			submitLogin();
		}
	});

	$("#login-container").on('keypress', '#password', function(e) {
		if (e.which == 13) {
			submitLogin();
		}
	});
	
    $("textarea[name='comment']").keyup(function(){
        $("#remaining").text((500 - $(this).val().length));
    });
    
  	$("ul#language-select > li > a").click(function(e) {
  		e.preventDefault();
  		
  		var lang  = $(this).attr('href').replace('#', '');
  		var fDIV  = document.createElement('div');
        $(fDIV).html('<form id="language-form" method="post" action="' + document.URL + '"><input name="language-code" type="hidden" value="' + lang + '" /></form>');
        $("body").after(fDIV);
        $("#language-form").submit();
  	});
    
    $("#comments-container").on({
  		mouseenter: function() {
            $(this).find('.buttons').show()
  		},
  		mouseleave: function() {
            $(this).find('.buttons').hide()
  		}
  	}, ".media");
    
    $("#comments-container").on('click', "button[id^='vote-']", function(e) {
        var split       = $(this).attr('id').split('-');
        var type		= split[1];
        var rating      = split[2];
        var comment_id  = split[3];
        
        if (type != 'photo' && type != 'video' && type != 'user') {
      		return;
        }

        $.ajax({
            url: base_url + '/ajax.php?s=' + type + '_comment_vote',
            cache: false,
            type: "POST",
            dataType: "json",
            data: { comment_id: comment_id, rating: rating },
            success: function(response) {
                if (response.status == '1') {
                    $(".media-footer-" + comment_id).html(response.code);
                }
            }
        });
    });
    
    $("ul.videos").on({
  		mouseenter: function() {
            $(this).find('.playlist-add').show()
  		},
  		mouseleave: function() {
            $(this).find('.playlist-add').hide()
  		}
    }, ".video");
    
    $("ul.videos").on('click', "button[id^='add-']", function(e) {
  		var video_id = $(this).attr('id').match(/add-(.*)/)[1];
  		
        $.ajax({
            url: base_url + '/ajax.php?s=playlist_modal',
            cache: false,
            type: "POST",
            dataType: "json",
            data: { video_id: video_id },
            success: function(response) {
                if (response.status == '1') {
              		$("button[id='add-" + response.id + "']").after(response.code);
              		$("#add-modal-" + response.id).modal();
                }
            }
        });  		
    });
    
    $(".video").on('click', "input[name='playlist_id']", function(e) {
  		var playlist_id = $(this).val();
  		var video_id	= $(this).attr('id').match(/playlist-add-(.*)/)[1];
    
        $.ajax({
            url: base_url + '/ajax.php?s=playlist_modal',
            cache: false,
            type: "POST",
            dataType: "json",
            data: { playlist_id: playlist_id, video_id: video_id },
            success: function(response) {
              	$("#playlist-response").html(close + response.msg);
                if (response.status == '1') {
              		$("#playlist-response").removeClass('alert-danger').addClass('alert-success');
              		setTimeout(function() {$("#add-modal-" + response.id).modal('hide')}, 1000);
                } else {
              		$("#playlist-response").removeClass('alert-success').addClass('alert-danger');
              	}
              	
              	$("#playlist-response").show();
            }
        });  		
    });
    
    $(".video").on('click', "button[id^='playlist-create-']", function(e) {
  		var video_id    = $(this).attr('id').match(/playlist-create-(.*)/)[1];
  		var name		= $("input[name='name']").val();
  		var type		= $("select[name='type']").val();

        $.ajax({
            url: base_url + '/ajax.php?s=playlist_modal',
            cache: false,
            type: "POST",
            dataType: "json",
            data: { video_id: video_id, name: name, type: type },
            success: function(response) {
              	$("#playlist-response").html(close + response.msg);
                if (response.status == '1') {
              		$("#playlist-response").removeClass('alert-danger').addClass('alert-success');
              		setTimeout(function() {$("#add-modal-" + response.id).modal('hide')}, 1000);
                } else {
              		$("#playlist-response").removeClass('alert-success').addClass('alert-danger');
              	}
              	
              	$("#playlist-response").show();
            }
        });  		
    });

    $("ul.videos").on({
  		mouseenter: function() {
  			startThumbRotation($(this).attr('id'), $(this).attr('src'));
  		},
  		mouseleave: function() {
  			endThumbRotation($(this).attr('id'), $(this).attr('src'));
  		}
  	}, "img[id^='preview-']");
  	
    $("#comments-container").on('click', "button[id^='spam-']", function(e) {
        e.preventDefault();
        var split       = $(this).attr('id').split('-');
        var type        = split[1];
        var comment_id  = split[2];
        var parent_id   = split[3];
    
        $.ajax({
            url: base_url + '/ajax.php?s=spam',
            cache: false,
            type: "POST",
            dataType: "json",
            data: { type: type, comment_id: comment_id, parent_id: parent_id },
            success: function(response) {
                $("span[id='spam-" + type + "-" + comment_id + "']").html('<small class="text-success">' + response.msg + '</small>');
            }
        });  		
    });
});