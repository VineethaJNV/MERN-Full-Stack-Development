//this code is going to act as our server
const express = require("express");
const app = express();

// console.log(app);

let port = 8080;
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});


app.get("/", (req, res) => {
    res.send("you contacted root path");
})
app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
})
app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
})

app.get("*", (req, res) => {
    res.send("This path does not exist");
})
// app.use((req, res) =>{ //req, res are default parameters
//     // console.log(req);
//     console.log("request received");
//     res.send("this is a basic response");
//     res.send({
//         fruit:"apple",
//         color:"red",
//     });
//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
// });