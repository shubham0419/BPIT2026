const express = require("express");
const app = express();


// home route
app.get("/",(req,res)=>{
  console.log(req.ip);
  res.send("hello from server");
})

app.post("/",(req,res)=>{
  console.log("this is a post req");
  res.send("hello from server");
})
// // example  of path 
// app.get("/producs",(req,res)=>{
// })
// app.get("/profile",(req,res)=>{
// })

app.listen(4000,()=>{
  console.log("Server started on port 4000");
});