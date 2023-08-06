let newP = document.createElement("p");
newP.innerText = "Hey I'm Red!";
newP.style.color = "red";

let body = document.querySelector("body");
body.append(newP);

let h3 = document.createElement("h3");
h3.innerText = "Hey, I am a blue h3!";
h3.classList.add("blue");
body.append(h3);

let div = document.createElement("div");
div.classList.add("div-style")
let h1 = document.createElement("h1");
h1.innerText = "I am in a div"
div.appendChild(h1);
let childP = document.createElement("p");
childP.innerText = "ME TOO!"
div.appendChild(childP);
body.append(div);


// let links = document.querySelectorAll(".box a");

// for( link of links){
//     link.style.color = "green"; 
// }
// console.dir(document.querySelectorAll("div a"));
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));

// let smallImg = document.getElementsByClassName("oldImg");

// for(let i = 0 ; i < smallImg.length; i++){
//     smallImg[i].src = "/Assets/Spider-Man.png"
//     console.dir(`The value of image no ${i} has been changed`);
// }