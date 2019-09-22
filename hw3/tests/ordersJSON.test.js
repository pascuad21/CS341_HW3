const ordersFile = require("../routes/orders");
const testArray = ordersFile.ordersArray;
test('test ordersFile', () => {
    //makes sure there is a file 
    expect(ordersFile).toEqual(expect.anything());

    //makes sure there is an array variable 
    expect(testArray).toEqual(expect.anything());

    //makes sure there some data in the array 
    expect(testArray.data).toEqual(expect.anything());
});
/* External Citation
I didn't know how to reference a variable from another .js fike
https://stackoverflow.com/questions/7612011/how-to-get-a-variable-from-a-file-to-another-file-in-node-js
Accessed:  9/21/19 
*/ 