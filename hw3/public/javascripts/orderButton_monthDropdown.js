/* ! when the order button is clicked then the form will be hidden and print out
	a thank you message */
$(document).ready(function(){
	$("#orderButton").click(function(){
		orderFunction();
		$("table").hide();
		$("#noteHeader").hide();
		$("#notes").hide();
		$("#orderButton").hide();	
	});
});

/* this changes the drop down month based on the clicked value */
$(document).ready(function(){
	$("#dropContent a").click(function(){
		$("#month").text($(this).text());
	});
});