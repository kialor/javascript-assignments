let fruitInventory = new Map();
fruitInventory.set("apple", 10);
fruitInventory.set("banana", 20);
fruitInventory.set("orange", 30);

//set method - update apple to 15
fruitInventory.set("apple", 15);
console.log(fruitInventory);

//get method - banana inventory
console.log(fruitInventory.get("banana"));

//store banana inventory into new variable
let bananaInventory = fruitInventory.get("banana")
console.log(bananaInventory);


let uniqueColors = new Set();
uniqueColors.add("red");
uniqueColors.add("blue");
uniqueColors.add("green");

//add yellow to set
uniqueColors.add("yellow");

console.log(uniqueColors)

//has method to check for blue
console.log(uniqueColors.has("blue"));

//store has blue result into new variable
let hasBlue = uniqueColors.has("blue");
console.log(hasBlue);