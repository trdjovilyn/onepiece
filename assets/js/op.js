$(document).ready(function(){
	//initial content
	$('#explore .wrapper').load('history.php');

	//handles menu clicks
	$('.ovw_menu ul li a').click(function(){
		var page = $(this).attr('href');
		$('#explore .wrapper').load(page +'.php');
		return false;
	});
});