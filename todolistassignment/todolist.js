function addItemToListBottom (){
    const newLI = document.createElement("li");
    newLI.className = "list-group-item";
    const inputValue = document.querySelector(".form-control").value;
    const text = document.createTextNode(inputValue);
    newLI.appendChild(text);

    const checkbox = document.createElement("input");
    checkbox.className = "form-check-input me-1";
    checkbox.type = "checkbox";
    newLI.insertBefore(checkbox, newLI.firstChild);

    if (inputValue === '') {
        alert("Please enter a to do item");
      } else {
        document.querySelector(".list-group").appendChild(newLI);
      }
      document.querySelector(".form-control").value = "";
      
};


// function removeListItem (){
//   const removeItem = document.querySelector(list-group-item);
//   removeItem.remove();
// }

// const removeButton = document.querySelectorAll(".form-check-input");
// removeButton.forEach(function(checkbox) {
//   checkbox.addEventListener("click, removeItem");
// });

document.querySelector("button").addEventListener("click", addItemToListBottom);
