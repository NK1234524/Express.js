const express = require('express')
const app = express()
const port = 9000;

app.listen(port , ()=>{
    console.log(`The client entered to the port ${port}`);
});

app.get("/",(req,res)=>{
    console.log("New Request ");
    res.send("Hello Everyone");    
});

app.get("/:username/:password", (req, res) => {
    console.log("Data sent");
    let { username, password } = req.params;
    let htmlstr = `<h1 style='color:brown; text-align:center'>Welcome to @${username}</h1>`; 
    res.send(htmlstr);
});
