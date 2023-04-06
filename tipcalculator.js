let billAmount = 200;

//tip
function calculateTip (x) {
    let tip = x * 0.2;
    return tip;
}

let tip = calculateTip(billAmount);
console.log("tip: " + tip);

//total
function getBillTotal(x) {
    let total = x + calculateTip(x);
    return total;
}

let total = getBillTotal(200);
console.log("total: " + total);
