console.log("start");

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json));

async function fetchTodo() {
  let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let data = await res.json();
  console.log(data);
}


async function fetchTodo2() {
  let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let data = await res.json();
  console.log("1",data);
}

fetchTodo();
fetchTodo2();


console.log("end");
console.log("end");
console
console.log("end");