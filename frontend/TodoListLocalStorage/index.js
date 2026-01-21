const form = document.getElementById("todo-form");
const todoContainer = document.getElementById("todo-container");

const todos = localStorage.getItem("todos");

if (!todos) {
  let newTodos = [];
  localStorage.setItem("todos", JSON.stringify(newTodos));
}else{
  renderTodos(JSON.parse(todos));
}

// let arr =[1,2,3,4,5,6];

// let ar = [{name:"shubham",age:25},{name:"rohit",age:26}];

// let updatedAr = ar.map((ele)=>{
//   if(ele.name==="shubham"){
//     return {
//     ...ele,
//     place:"delhi"
//   }
//   }
//   return ele;
// })

// [{name:"shubham",age:25,place:"delhi"},{name:"rohit",age:26}]


// [1,4,9.16,25,36]
// let a = arr.map((ele)=>{
//   return ele*ele;
// })
// let arr = [1,2,3,4,5,6,7,8,9];

// // [1,3,5,7,9]
// let odd = arr.filter((ele)=>{
//   return (ele%2!=0)
// })


// let ar = [{name:"shubham",age:25},{name:"rohit",age:26}]; 
// let aged = ar.filter((ele)=>{
//   return (ele.age <=25);
// })
// // [{name:"shubham",age:25}]

todoContainer.addEventListener("click",(e)=>{
  const eleClicked = e.target;
  const allTodos = JSON.parse(localStorage.getItem("todos"));
  const value = eleClicked.parentElement.previousElementSibling.innerText;
  let newTodos;
  if(eleClicked.id === "delete"){
    console.log(eleClicked.parentElement.parentElement.outerHTML);
    eleClicked.parentElement.parentElement.outerHTML = "";
    newTodos = allTodos.filter((ele)=>{
      return (ele.task != value);
    })
    localStorage.setItem("todos",JSON.stringify(newTodos));
    return;
  }
  if(eleClicked.id == "complete"){
    eleClicked.innerHTML = "Undo";
    eleClicked.id = "undo"
    newTodos = allTodos.map((ele)=>{
      if(ele.task === value){
        return {
          ...ele,
          status:true
        }
      }
      return ele;
    })
    localStorage.setItem("todos",JSON.stringify(newTodos))
  }else if(eleClicked.id == "undo"){
    eleClicked.innerHTML = "Complete";
    eleClicked.id = "complete"
    newTodos = allTodos.map((ele)=>{
      if(ele.task === value){
        return {
          ...ele,
          status:false
        }
      }
      return ele;
    })
    localStorage.setItem("todos",JSON.stringify(newTodos))
  }
})

function renderTodos(allTodos) {
  todoContainer.innerHTML = "";
  for (let i = 0; i < allTodos.length; i++) {
    const todo = document.createElement("div");
    todo.className = "todo";

    todo.innerHTML = `<h3>${allTodos[i].task}</h3>
      <div id="btns">
        <button id="${allTodos[i].status?'undo':'complete'}">
        ${allTodos[i].status?'Undo':'Complete'}
        </button>
        <button id="delete">Delete</button>
      </div>
    `;
    // console.log(todo)
    todoContainer.append(todo);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(form.children[0].value);
  const task = form.children[0].value;

  const allTodos = JSON.parse(localStorage.getItem("todos"));
  allTodos.unshift({task,status:false});
  renderTodos(allTodos);
  localStorage.setItem("todos",JSON.stringify(allTodos))
  form.children[0].value = "";
});
