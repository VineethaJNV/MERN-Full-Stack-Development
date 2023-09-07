const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.get("/",(req, res) =>{
    res.render("home.ejs");
});

// app.get("/ig/:username", (req, res)=>{
//     const followers =["adam", "bob", "vineetha", "varshitha"]
//     let {username} = req.params;
//     console.log(username);
//     res.render("instagram.ejs", {username, followers});
// })

app.get("/ig/:username", (req, res)=>{
    const instaData = require("./data.json");
    let {username} = req.params;
    console.log(instaData);
    const data = instaData[username]
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }
    
})

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {num:diceVal});
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})