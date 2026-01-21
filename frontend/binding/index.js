// this keyword binding

// object binding -> bind to itself
// function binding -> bind to global object

const obj = {
  Fname:"shubham",
  Lname:"Choudhary",
  greet(){
    console.log("hello" + this.Fname + this.Lname);
  }
}
// obj.greet();

function fun(a){
  console.log("aaaa",a);
  console.log(this);
}

// explicit binding
// fun.bind(obj).call();

fun.call(obj,4);
console.log(obj.__proto__);