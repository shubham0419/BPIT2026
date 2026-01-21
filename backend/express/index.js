const express = require("express");
const app = express();

// to parse the 
app.use(express.json());

// // example  of path 
// app.get("/producs",(req,res)=>{
// })
// app.get("/profile",(req,res)=>{
// })

// home route
app.get("/",(req,res)=>{
  console.log(req.ip);
  res.status(200).send("hello from server");
})

app.post("/",(req,res)=>{
  console.log("this is a post req");
  res.send("hello from server");
})

// query
app.get("/user",(req,res)=>{
  console.log(req.query);
  res.send(req.query);
});

// params
app.get("/user/:id/:name",(req,res)=>{
  console.log(req.params);
  res.send(req.params)
})

// body
app.post("/user",(req,res)=>{
  console.log(req.body);
  // res.status(200).send(req.body);
  let sol ="hello"
  res.status(200).json({sol,data:req.body});
})

app.listen(4000,()=>{
  console.log("Server started on port 4000");
});