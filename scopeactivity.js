function outer(){
  let a = "hello";
  let b = {
    firstName: "joe",
    lastName: "goldberg",
  }

  console.log(a);
  console.log(b);

  function inner(a, b) {
    console.log(a);
    console.log(b);
    a = "goodbye";
    b= {
      firstName: "love",
      secondName: "quinn"
    }
    console.log(a);
    console.log(b);
   b= {
    firstName: "love",
    middleName: "forty"
   }
  
  }

  inner(a,b);
}

outer();

console.log(a);
console.log(b);