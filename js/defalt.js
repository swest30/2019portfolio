$(function(){
	$('.nav2').on('click', function(){
		$('html, body').animate({
			scrollTop : $('.profile').offset().top
		},500);
	});
});