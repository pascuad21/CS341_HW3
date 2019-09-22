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
		//This will change the data based on what month it is
		$.post('http://localhost:3000/orders',
			function(data){
				$("#cherryTotal").text(data.cherry);
				$("#plainTotal").text(data.plain);
				$("#chocolateTotal").text(data.chocolate);
			});
	});
});