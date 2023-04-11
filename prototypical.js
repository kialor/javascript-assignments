function Person ( firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
    this.family = [];
}
Person.prototype.fullName = function () {
    return this.firstName +" "+ this.lastName;
};
Person.prototype.toString = function() {
    return this.firstName +" "+ this.lastName+ ", Favorite Color: " + this.favoriteColor + ", Favorite Number: " + this.favoriteNumber + ", Favorite Foods: " + this.favoriteFoods;
};
Person.prototype.addToFamily = function (person) {
    if (person instanceof Person && !this.family.includes(person)) {
        this.family.push(person);
    }
    return this.family.length;
};


let carl = new Person("Carl", "Smith", "yellow", 13, ["fries", "meatloaf"]);
let bob = new Person("Bob", "Johnson", "blue", 2, ["mashed potato", "pizza"]);
let billy = new Person("Billy", "Travis", "orange", 99, ["ribs", "onion rings"]);
let beau = new Person("Beau", "Richards", "black", 25, ["ramen", "fried rice"]);


console.log(carl.fullName());
console.log(carl.toString());
console.log(carl.addToFamily(bob));
console.log(carl.addToFamily(billy));
console.log(carl.addToFamily(beau));
console.log(carl.family);

