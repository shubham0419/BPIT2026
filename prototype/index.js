

function Person(fname,lname,age){
    this.Fname = fname;
    this.Lname = lname;
    this.age = age;
}

// arrow functions don't have "this" keyword 
Person.prototype.location = ()=>{
  console.log(this.Fname+ this.Lname);
}

Person.prototype.location = function(){
  console.log(this.Fname+ this.Lname);
}
  
const per = new Person("shubham","choudhary",25);

console.log(per.location())

console.log(per);

// arrow functions and normal function
const fun = ()=>{
  console.log(this);
}