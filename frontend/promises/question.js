console.log("start");


setTimeout(() => {
  console.log("set timeout");
}, 0);

const promise = new Promise((resolve,reject)=>{
  resolve()
})

promise.then(()=>{
  console.log("this is resolved promise");
})

console.log("end");


//-------------------    Answer
// start
// end
// resolve
// set timeout