$(function(){
	function navScrl(section){
		var pos = $(section).offset().top-100;
		$('html, body').stop().animate({'scrollTop':pos},500);
	}

	$('.nav2').on('click', function(){
		navScrl('.mainpage');
	});

	$('.nav2').on('click', function(){
		navScrl('.profile');
	});

	$('.nav3').on('click', function(){
		navScrl('.project');
	});
});