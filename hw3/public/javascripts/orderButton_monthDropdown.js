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

	//When the user loads up the page, January's data should be up	
	$.post('http://localhost:3000/orders',
	{
		month: 'Jan',  //the first month
	}, 
	function(data){
		$("#cherryTotal").text(data.cherry);
		$("#plainTotal").text(data.plain);
		$("#chocolateTotal").text(data.chocolate);
	});

	//This will change the data based on what month it is
	$("#dropContent a").click(function(){

		$("#month").text($(this).text());
		$.post('http://localhost:3000/orders',
			{
				month: $(this).text(),  //what month is being clicked
			}, 
			function(data){
				$("#cherryTotal").text(data.cherry);
				$("#plainTotal").text(data.plain);
				$("#chocolateTotal").text(data.chocolate);
			});
	});
});