//the method will show the user a thank you screen with the order
function orderFunction(){			
//Variables needed to place the order
	var quantity, topping, notes, chosenTopping;  

	quantity = document.getElementById("select").value;
	notes = document.getElementById("notes").value;
			
	var veganLoc = notes.search("vegan"); //gets the location of the word vegan 
			
	//this takes in the all the topping options and finds the one that was chosen
         	 
	if(document.getElementById("plain").checked){
            	topping = document.getElementById("plain").value;
        }
        else if(document.getElementById("cherry").checked){
           	topping = document.getElementById("cherry").value;
        }
        else if(document.getElementById("chocolate").checked){
           	topping = document.getElementById("chocolate").value;
        }
        else{
            	topping = "you forgot to select a topping";
        }
			
	//checks to see if the word vegan has been used
	if(veganLoc > -1){
		alert("Cheesecakes contain Dairy fam.");	
	}

	//prints the thank you text
	var thankMessage = "Thank You! Your Order has been placed!";
    var theOrder = "You Ordered: " + quantity + " " + topping +" " +
		" Cheesecakes. Your note was: " + notes;
		document.getElementById("thankYou").innerHTML = thankMessage;
		document.getElementById("orderOverview").innerHTML = theOrder;
		
	//sends the data to newOrder.js 
	$.post('http://localhost:3000/neworder',
	{
		quantity: quantity,
		topping: topping,
		notes: notes,
	},	
	);

	}