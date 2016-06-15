$(document).ready(function() {
	console.log("Hello!");
	//Accordion
	$(".accordion_title").on("click", function() {
		$(this).toggleClass("active");
	});
});
