const header = document.getElementsByTagName("header");
console.log(header);

const section = document.getElementsByTagName("section");
console.log(section);

const selectedItem = document.querySelector("section.current")
console.log (selectedItem);

const nextSection = selectedItem.nextElementSibling;
console.log(nextSection);

const firstSection = selectedItem.previousElementSibling.querySelector("h2");
console.log(firstSection);

const div = document.querySelector("h2.highlight");
console.log(div);

const h2Section = document.querySelectorAll("section:has(h2)");
console.log(h2Section);








