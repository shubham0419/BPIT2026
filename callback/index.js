

function fun1(){
  console.log("fun 1 start");

  setTimeout(() => {
    console.log("fun1 timeout");
  }, 300);

  console.log("fun 1 end");
}

fun1();


