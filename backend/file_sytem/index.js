const fs = require("fs");

// fs.readFile("mefile.txt",'utf-8',(err,data)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(data);
// })

// fs.writeFile("myfile.txt","this is my data",(err)=>{
//   console.log(err);
// })

// const data = fs.readFileSync("mefile.txt","utf-8");
// console.log("sync",data);

// fs.appendFile("myfile.txt","\nthis is my appended data",(err)=>{
//   console.log(err);
// });

// // to delete a file
// fs.unlink("myfile",(err)=>{
//   console.log(err);
// })

fs.writeFile("data.json",JSON.stringify({name:"shaubham",arr:[1,2,3,4,5,6]}),(err)=>{
  console.log(err);
})


fs.readFile("data.json","utf-8",(err,data)=>{
  console.log("noraml -> ",data);
  console.log(JSON.parse(data));
})