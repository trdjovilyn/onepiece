$(document).ready(function(){
	//initial content
	$('#explore .wrapper').load('history.html');

	//handles menu clicks
	$('.ovw_menu ul li a').click(function(){
		var page = $(this).attr('href');
		$('#explore .wrapper').load(page +'.html');
		return false;
	});
});