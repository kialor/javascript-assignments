function recursion (base, exponent) {
    if (exponent == 1){
        return base;
    }else{
        return base * recursion(base, exponent-1)
    }
}

console.log(recursion(7, 3));
console.log(recursion(2, 5));
console.log(recursion(12, 2));
console.log(recursion(9, 4));
