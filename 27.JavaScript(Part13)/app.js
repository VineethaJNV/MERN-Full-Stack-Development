// let url = "https://catfact.ninja/fact";


// let btn = document.querySelector("button");
// btn.addEventListener("click", async ()=>{
//     console.log("button was clicked");
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;

// })
// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch(e){
//         console.log("error-", e);
//         return "No fact found"
//     }
// }

let url = "https://universities.hipolabs.com/search?name=";
let country = "india";
let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    let country = document.querySelector("input").value;

    getColleges(country);
})
async function getColleges(country) {
    try{
        let res = await axios.get(url+country);
        console.log(res);
    }catch(e){
        console.log("error - ",e);
    }
}
