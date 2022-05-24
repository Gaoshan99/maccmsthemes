function adv_pos(width, height)
{
    var adv         = $("#player-advertising");
    if (adv.length) {
  		var adv_width 	= $("#player-advertising").width();
  		var adv_height 	= $("#player-advertising").height();
  		var pos_top		= ((height-adv_height)/2)-10;
  		var pos_left	= (width-adv_width)/2;
        
        adv.css('top', pos_top + 'px');
        adv.css('left', pos_left + 'px');
    }
}

function premium_pos(width, height)
{
    var premium         = $("#player-premium");
    if (premium.length) {
        if (width > 310 && height > 610) {
            var pos_top     = ((height-600)/2)-10;
            var pos_left    = (width-330)/2;

            premium.css('top', pos_top + 'px');
            premium.css('left', pos_left + 'px');
        } else {
      		premium.css('top', 0);
      		premium.css('left', 0);
        }
    }
}

$(document).ready(function() {
	var video_id	= $("input[name='video_id']").val();
	var vwidth		= 854;
	var vheight		= 600;
	var playerc		= $("#player-container");
	var width		= playerc.width();
	var height		= Math.round(width / (vwidth / vheight));
	
	playerc.css('height', height);
	adv_pos(width, height);	
	premium_pos(width, height);

	$(window).resize(function() {
		var width 	= playerc.width();
		var height 	= Math.round(width / (vwidth / vheight));
		playerc.css('height', height);
		adv_pos(width, height);
		premium_pos(width, height);
	});
	
	$("button[id='like'],button[id='dislike']").click(function(e) {
		e.preventDefault();
		
		var rating = 1;
		if ($(this).attr('id') == 'dislike') {
			rating = 0;
		}
		
		$.ajax({
            url: base_url + '/ajax.php?s=video_rate',
            cache: false,
            type: "POST",
            dataType: "json",
            data: {video_id: video_id, rating: rating},
            success: function(response) {
          		if (response.status == '1') {
          			var color = 'text-success';
          			var id    = 'like-icon';
          			if (rating == '0') {
          				color = 'text-muted';
          				id    = 'dislike-icon';
          			}
          			
          			$("i[id='" + id + "']").addClass(color);
          			$("button[id='rating']").html(response.code);
          			$("button[id='like'],button[id='dislike']").prop('disabled', true);
          		} else {
          			$("#response").html(close + response.msg);
          			$("#response").removeClass('alert-success').addClass('alert-danger');
          			$("#response").show();
          		}
            }
        });
		
	});
	
	$("button[id='share']").click(function(e) {
        e.preventDefault();
        
        $("#share-container").slideToggle();
	});

	$("button[id='download']").click(function(e) {
        e.preventDefault();
        
        $("#download-container").slideToggle();
	});

	$("button[id='favorite']").click(function(e) {
		e.preventDefault();
		
		$.ajax({
            url: base_url + '',
            cache: false,
            type: "POST",
            dataType: "json",
            data: {video_id: video_id},
            success: function(response) {
          		if (response.status == '1') {
          			$("i[id='favorite-icon']").addClass('text-danger');
          			$("button[id='favorite']").prop('disabled', true);          		
          		} else {
          			$("#response-container").html(close + response.msg);
          			$("#response-container").removeClass('alert-success').addClass('alert-danger');
          			$("#response-container").show();
          		}
            }
        });		
	});
	
	$("button[id='report']").click(function(e) {
		e.preventDefault();
		
		$.get(base_url + '/ajax.php?s=video_report&modal=1', function(response) {
			$("#report-container").removeClass();
			$("#report-container").html(response);
			$("#report-container").show();
			$("#report-modal").modal();
		});
	});
	
	$("#report-container").on('click', '#report-send', function() {
		var reason = $("input[name='reason']:checked").val();
		var message = $("textarea[name='message']").val();
		
		$.ajax({
            url: base_url + '/ajax.php?s=video_report',
            cache: false,
            type: "POST",
            dataType: "json",
            data: {video_id: video_id, reason: reason, message: message},
            success: function(response) {
          		$("#report-modal").modal('hide');
          		
          		if (response.status == '1') {
          			$("button[id='report']").addClass('text-success');
          			$("button[id='report']").prop('disabled', true);
          		} else {
          			$("#response").html(close + response.msg);
          			$("#response").removeClass('alert-success').addClass('alert-danger');
          			$("#response").show();
          		}
            }
        });
	});
	
    $("button[id='related-more']").click(function() {
		var page		= $("input[name='related-page']").val();

        $.ajax({
            url: base_url + '/ajax.php?s=video_related',
            cache: false,
            type: "POST",
            dataType: "json",
            data: { video_id: video_id, page: page },
            success: function(response) {
                if (response.status == '1') {
            		$("input[name='related-page']").val(response.page);
            		$("ul[class='videos related'] li:last").after(response.code);
            		if (response.end == '1') {
            		  $("button[id='related-more']").fadeOut();
            		}
                }
            }
        });
    });	
    
    $("button[id='playlist']").click(function(e) {        
        e.preventDefault();
        
        if ($("#playlist-container").is(':visible')) {
      		$("#playlist-container").hide();
      		return;
        }
        
        $.ajax({
            url: base_url + '/ajax.php?s=playlist',
            cache: false,
            type: "POST",
            dataType: "json",
            success: function(response) {
                if (response.status == '1') {
                    $("#playlist-container").html(response.code);
                    $("#playlist-container").show();
                } else {
                    $("#response-container").html(close + response.msg);
                    $("#response-container").removeClass('alert-success').addClass('alert-danger');
                    $("#response-container").show();
                }
            }
        });
    });
    
    $("#playlist-container").on('click', 'button#playlist-create, button#playlist-select', function(e) {
  		e.preventDefault();

        var video_id    = $("input[name='video_id']").val();
        var playlist_id = $("select[name='playlist_id']").val();
        var name        = $("input[name='name']").val();
        var type        = $("select[name='type']").val();
        var button      = $(this).attr('id');

        $.ajax({
            url: base_url + '/ajax.php?s=playlist',
            cache: false,
            type: "POST",
            data: {video_id: video_id, playlist_id: playlist_id, name: name, type: type, button: button},
            dataType: "json",
            success: function(response) {
                $("#response-container").html(close + response.msg);
                if (response.status == '1') {
                    $("#response-container").removeClass('alert-danger').addClass('alert-success');
                } else {
                    $("#response-container").removeClass('alert-success').addClass('alert-danger');
                }
                
                $("#response-container").show();
                $("#playlist-container").slideUp();
            }
        });
    });
    
    $("button[id='post-comment']").click(function(e) {
  		e.preventDefault();
    
        var comment  = $("textarea[name='comment']").val();
        var nickname = $("input[name='nickname']").val();
        var error    = false;
        var message  = 'Your message has been posted!';

        if (comment == '') {
            message = 'Please enter your comment!';
            error   = true;
        } else if (comment.length > 500) {
            message = 'Comment can contain maximum 500 characters!';
            error   = true;
        }
    
        if (error) {
            $("#response-comment").html(close + message);
            $("#response-comment").removeClass('alert-succes').addClass('alert-danger');
            $("#response-comment").show();
        }
        
        $.ajax({
            url: base_url + '/ajax.php?s=video_comment',
            cache: false,
            type: "POST",
            dataType: "json",
            data: { video_id: video_id, comment: comment, nickname: nickname },
            success: function(response) {
                if (response.status == '1') {
              		$("input[id='nickname']").val();
                    $("textarea[name='comment']").val('');
                    
                    $("#no-comments").hide();
                    
                    $("#comments-container").prepend(response.code);                    
                    $("#response-comment").removeClass('alert-danger').addClass('alert-success');
                } else {
                    $("#response-comment").removeClass('alert-success').addClass('alert-danger');
                }
                
                $("#response-comment").html(close + response.msg);
                $("#response-comment").show();
            }
        });
    });

	$("#comments-container").on('click', "button[id^='comment-delete-']", function(e) {
        e.preventDefault();
        var comment_id = $(this).attr('id').match(/comment-delete-(.*)/)[1];

        $.ajax({
            url: base_url + '/ajax.php?s=video_comment_delete',
            cache: false,
            type: "POST",
            dataType: "json",
            data: { comment_id: comment_id },
            success: function(response) {
                if (response.status == '1') {
              		$("#comment-" + comment_id).css('border', '1px solid red');
                    $("#comment-" + comment_id).fadeOut(1000);
                }

                if (!$(".media:visible").length) {
              		$("#comments-container").html('<div id="no-comments" class="none">No comments yet!</div>');
                }
            }
        });
    });
	
	$("button[id='comment-pagination']").click(function(e) {
        e.preventDefault();

        var page		= $("input[name='comment-page']").val();

        $.ajax({
            url: base_url + '/ajax.php?s=video_comment_pagination',
            cache: false,
            type: "POST",
            dataType: "json",
            data: { video_id: video_id, page: page },
            success: function(response) {
                if (response.status == '1') {
              		$("input[name='comment-page']").val(response.page);
              		$("#comments-container").append(response.code);
              		
              		if (response.end == '1') {
              			$("button[id='comment-pagination']").fadeOut();
              		}
                }
            }
        });
    });    
});