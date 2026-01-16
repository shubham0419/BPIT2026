const form = document.getElementById("todo-form");
const todoContainer = document.getElementById("todo-container");

// localStorage.setItem("data","this is local storage");
// console.log(localStorage.getItem("data"));

// //  // not work as we can only store strings in localstorage
// // localStorage.setItem("obj",{name:"shubham"});
// // console.log(localStorage.getItem("obj"));

// let store = JSON.stringify({name:"shubham"})
// localStorage.setItem("obj",store);

// const data = JSON.parse(localStorage.getItem("obj"));
// console.log(data);



todoContainer.addEventListener("click",(e)=>{
  const eleClicked = e.target;

  if(eleClicked.id === "delete"){
    console.log(eleClicked.parentElement.parentElement.outerHTML);
    eleClicked.parentElement.parentElement.outerHTML = "";
  }

  if(eleClicked.id == "complete"){
    eleClicked.innerHTML = "Undo";
    eleClicked.id = "undo"
  }else if(eleClicked.id == "undo"){
    eleClicked.innerHTML = "Complete";
    eleClicked.id = "complete"
  }
})

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  // console.log(form.children[0].value);
  const task = form.children[0].value;

  const todo = document.createElement("div");
  todo.className = "todo";

  todo.innerHTML = `<h3>${task}</h3>
    <div id="btns">
      <button id="complete">Complete</button>
      <button id="delete">Delete</button>
    </div>
  `
  // console.log(todo);
  todoContainer.prepend(todo);
  form.children[0].value = "";
})