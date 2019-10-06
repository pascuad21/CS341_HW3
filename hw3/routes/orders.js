var express = require('express');
var router = express.Router();
var dbms = require('./dbms.js');

var ordersArray = { 
    "data": [
         { 
            "Topping" : "Cherry",
            "Quantity": 80 
        }, 
        { 
            "Topping": "Plain", 
            "Quantity": 25
        },  
        { 
            "Topping": "Chocolate",
            "Quantity": 32 
        }
    ]
};

/* GET orders list */
router.get('/', function(req, res, next) {
  res.send(ordersArray);
});

/* takes in post requests from the main website and sends the Toppings & quantities*/
router.post('/',function(req,res){ 
    var month = req.body.month;
    console.log(month); // for testing purposes 
    dbms.dbquery("SELECT * FROM ORDERS WHERE MONTH='"+ month +"'", processMonthData);

    function processMonthData(row, result){
        if(row == false){
            var plainCounter = 0;
            var chocolateCounter = 0;
            var cherryCounter = 0;
            for( var row = 0; row < result.length; row++){
                orderString = JSON.stringify(result[row]);
                orderObj = JSON.parse(orderString);
                if(orderObj.TOPPING == 'plain'){
                    plainCounter = plainCounter + orderObj.QUANTITY;
                }
                else if(orderObj.TOPPING == 'chocolate'){
                    chocolateCounter = chocolateCounter + orderObj.QUANTITY;
                }
                else if(orderObj.TOPPING == 'cherry'){
                    cherryCounter = cherryCounter + orderObj.QUANTITY;
                }
            }
        }
        var details  = {plain:"Plain " + plainCounter,chocolate: "Chocolate "+chocolateCounter,cherry: "Cherry "+cherryCounter};
        res.send(details);
    }
});

module.exports = router;
module.exports.ordersArray = ordersArray; //used for testing

/* External Citation 
I didn't know how to send multiple json data values through post 
https://stackoverflow.com/questions/30964486/nodejs-express-how-to-send-multiple-json-variable-from-server-to-client-throu
Accessed: 9/22/2019 
*/

/* External Citation 
I didn't know how to properly get data from the database so patrick helped me
Source: Peer-Patrick
*/