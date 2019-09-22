var express = require('express');
var router = express.Router();
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
    var cherryData = (ordersArray.data[0].Topping + " " + ordersArray.data[0].Quantity);
    var plainData = (ordersArray.data[1].Topping + " " + ordersArray.data[1].Quantity);
    var chocolateData = (ordersArray.data[2].Topping + " " + ordersArray.data[2].Quantity);
    res.send({cherry: cherryData , plain: plainData, chocolate : chocolateData }); 
});

module.exports = router;
module.exports.ordersArray = ordersArray; //used for testing

/* External Citation 
I didn't know how to send multiple json data values through post 
https://stackoverflow.com/questions/30964486/nodejs-express-how-to-send-multiple-json-variable-from-server-to-client-throu
Accessed: 9/22/2019 
*/