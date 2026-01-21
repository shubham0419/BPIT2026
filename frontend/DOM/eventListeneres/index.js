

const btn = document.getElementById("click");


// e => event refrence
btn.addEventListener("click", async (e)=>{
  console.log(e.target);     // returns element where event occured
  e.target.style.backgroundColor = "red";
})

btn.addEventListener("mouseenter",(e)=>{
  e.target.style.backgroundColor = "green";
})

btn.addEventListener("mouseleave",(e)=>{
  e.target.style.backgroundColor = "";
})