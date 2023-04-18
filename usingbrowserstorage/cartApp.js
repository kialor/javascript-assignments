function initializeCart() {
    let cart = JSON.parse(localStorage.getItem("cart"))
    if(cart == null) {
        cart= [];
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

// if (localStorage.getItem("cart")) {
//     console.log("cart is in local storage")
//     }else {
//         console.log("cart not in storage")
//     }

window.addEventListener("load", initializeCart);

function addItem (item) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
}

function removeItem (itemID) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let index = cart.findIndex(item => item.id == itemID);
    if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

function displayCart (){
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
}


const form = document.getElementById("addItemForm");
const myButton = document.getElementsByClassName("addButton");

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const name = document.getElementById("itemName").value;
    console.log(name);
    const price = document.getElementById("itemPrice").value;
    console.log(price);
    const id = Math.floor(Math.random() * 1000);
    console.log(id);

    const item = {
        name: name,
        price: price,
        id: id,
    }
    addItem(item);
})

const displayButton = document.getElementById("displayCartButton")
displayButton.addEventListener("click", displayCart)








