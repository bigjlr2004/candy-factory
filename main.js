




//Define a function named buy chocolate
const buyChocolate = () => {
    //create a new objet with a type property whose value is Milk Chocolate and then return the object
    const newCandyObject = {
        type: "Milk Chocolate"
    }
    return newCandyObject;
}


/*Define a function addFlavoring, this function accepts a paramater for an incoming object
the function then adds a a flavor property of mint.
*/
const addFlavoring = (candyObject) => {
    candyObject.flavoring = "Mint";
    return candyObject;
}

/*Define a function named makeBarkMixture. 
this function accepts an object as a parameter. the function checks to see if the flavor property is mint with an if statement
if the flavor property is mint then the function adds a mixed property to the object with a value of true otherwise if 
the value is not mint it adds the value of false to the mixed property

*/
    
const makeBarkMixture = (candyObject) => {
    if (candyObject.flavoring === "Mint") {
        candyObject.mixed = true;
    }   else {
        candyObject.mixed = false;
    }
    return candyObject;
}

/*Define a function named bakeCandy. 
this function checks an incoming objects mixed property.  If the property is true the function adds a baked property of true
if the mixed property is false, the function adds a baked property of false
and returns the object

*/
const bakeCandy = (candyObject) => {
    if (candyObject.mixed === true) {
        candyObject.baked = true;
    }   else {
        candyObject.baked = false;
    }
    return candyObject;
}


/*
Define a function breakBark
 this function accepts an object as a parameter.  the function checks the objects baked property for a true or false value
 if the baked property is true then the function creates an array with the string "Mint Chocolate Bark Piece". if the baked proerty is
 false the function returns nothing. 
*/

const breakBark = (candyObject) => {
    if (candyObject.baked === true) {
        const breakCandy = ["Mint Chocolate Bark Piece", 
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece"];
        return breakCandy;
    }
}


const candyWithChocolate = (buyChocolate());
const candyWithMint = addFlavoring(candyWithChocolate);
const candyMixed = makeBarkMixture(candyWithMint);
const bakedCandy = bakeCandy(candyMixed);
const breakCandy = breakBark(bakedCandy);
console.log(breakCandy);
