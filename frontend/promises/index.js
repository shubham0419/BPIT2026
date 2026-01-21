console.log("start");

const promise = new Promise((ressole,reject)=>{
  let num = Math.random()*10;

  if(num<5){
    ressole(num);
  }
  else{
    reject(num);
  }
})


// promise.then(()=>{
//   console.log("this is resolved promise");
// }).catch(()=>{
//   console.log("this is rejected promise");
// })

// console.log("end");

// // chaining
promise.then((res)=>{
  console.log(res);
}).then(()=>{
  console.log("first chain");
}).then(()=>{
  console.log("second chain");
  const a=10;
  a=20;
}).then(()=>{
  console.log("third chain");
})
.catch((error)=>{
  console.log(error);
})


