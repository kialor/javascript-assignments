//update apple to granny smith apples
document.querySelectorAll(".pasta")[0].nextElementSibling.innerHTML = "Granny Smith Apples";

//remove oatmilk from list
document.querySelector(".last").remove();

//Add kombucha
const newLI = document.createElement("li");
newLI.innerHTML = "Kombucha";

const list = document.querySelector("ul");
list.appendChild(newLI);

//clear list and add items from array
let myItems = ["protein bars", "almonds", "peanut butter"];
list.innerHTML = "";

let listArray = document.getElementById("list");
myItems.forEach(array => {
    let item = document.createElement("li");
    item.textContent = array;
    listArray.appendChild(item);
});

//add class important to almond
let almonds = document.getElementsByTagName("li")[1];
almonds.classList.add("important");



