// async function greet(){
//     return "hello";
// }
// greet()
// .then((result)=>{
//     console.log("promise was resolved!");
//     console.log(result);
// })
// .catch((err)=>{
//     console.log("promise was rejected");
// })
// let h1 = document.querySelector("h1");
// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             h1.style.color = color;
//             console.log(`color was changed to ${color}`)
//             resolve("color changed!")
//         }, delay);
//     });
// }
// async function color(){
//     await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("orange", 1000);
// }
// function getNum(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     })
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
// }

/*Application Programming INterface*/
// let jsonRes = '{"fact":"The earliest ancestor of the modern cat lived about 30 million years ago. Scientists called it the\u00a0Proailurus, which means \u201cfirst cat\u201d in Greek. The group of animals that pet cats belong to emerged around 12 million years ago.","length":226}';
// let validRes = JSON.parse(jsonRes)
// console.log(validRes.fact);

let url = "https://icanhazdadjoke.com/";
fetch(url)
.then((res)=>{
    console.log(res);
    res.json().then((data)=>{
        console.log(data);
    })
})
.catch((err)=>{
    console.log("error", err);
})