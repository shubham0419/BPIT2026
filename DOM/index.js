// console.log(document);

const parentDiv = document.getElementById("parent");
console.log(parentDiv);

const classELe = document.getElementsByClassName("dom");
// console.log(classELe);  // this will return a list

// const nameEle = document.getElementsByTagName("h4");
// console.log(nameEle);   // this will return a list


// // query Selector 
// const firstClassEle = document.querySelector(".dom");
// console.log(firstClassEle);   // first ele which has class "dom"


// const firstTagEle = document.querySelector("h4");
// console.log(firstTagEle);

// const allClassEle = document.querySelectorAll(".dom");
// console.log(allClassEle);     //return a list of all the ele in which "dom" class is present


// // methods 
const first = classELe[0];
// console.log(first.innerText);

// console.log(first.getAttribute("name"));

// console.log(first.id,first.className);

// // assign values 
// first.innerText = "<span>this is changed by JS</span>"
// first.innerHTML = "<span>this is changed by JS</span>"

// first.id = "sh"

// console.log(first.id);


// // relations
// console.log(first.parentElement);
// console.log(first.nextElementSibling);
// console.log(first.previousElementSibling);


// create elements
const anchorTag = document.createElement("a");

anchorTag.setAttribute("href","https://google.com");
anchorTag.setAttribute("target","_blank");
anchorTag.innerText = "Google"

console.log(anchorTag);

parentDiv.append("anchorTag");       //can pass string and element
parentDiv.appendChild(anchorTag);   // can only pass element
// parentDiv.prepend(anchorTag);


first.after(anchorTag)  //put anchortag after an element
first.before(anchorTag) //put anchortag before an element