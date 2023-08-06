let h1 = document.querySelector("h1")
let h3 = document.querySelector("h3")
let p = document.querySelector("p")
let btns = document.querySelectorAll("button")

function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);

for(btn of btns){
    btn.addEventListener("click", changeColor);
}



// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onmouseenter = function(){
//         console.log("Mouse on element");
//     }
// }


// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//     alert("button was clicked")
//     console.log("Button was clicked");
// };

// function sayHello(){
//     console.log("Hello!");
// }
// btn.onclick = sayHello;