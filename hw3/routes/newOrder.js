var express = require('express');
var router = express.Router();
var dbms = require('./dbms.js');

//inserts a new order into the database
router.post('/',function(req){
    var id = Math.floor((Math.random() * 200) + 61); //making a random id that is past 61
    var month = 'JAN';  //hardcoded date
    var day = 23;  
    //values based on the user input 
    var quant = req.body.quantity; 
    var top = req.body.topping;
    var notes = req.body.notes; 

    //just in case there are no notes
    if(notes == null){
        notes = " ";
    }

    //sends the command to the database that inserts a new order 
    dbms.dbquery("INSERT INTO ORDERS VALUES ('"+id+"','"+month+"','"+day+"','"+quant+"','"+top+"','"+notes+"');", doNothing);
    function doNothing(row,result){
       return;  //because dbquery needs  callback function
    }
});

module.exports = router;