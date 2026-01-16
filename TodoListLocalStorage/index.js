const form = document.getElementById("todo-form");
const todoContainer = document.getElementById("todo-container");

const todos = localStorage.getItem("todos");

if (!todos) {
  let newTodos = [];
  localStorage.setItem("todos", JSON.stringify(newTodos));
}else{
  renderTodos(JSON.parse(todos));
}


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
