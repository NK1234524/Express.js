const express = require('express')
const app = express()
const port = 8080;

app.listen(port,()=>{
    console.log(`The server of port ${port} is being initialised`);
});

app.get("/",(req,res)=>{
    console.log("Requesting!!");
    res.send("Welcome");
});
app.get("/:username/:password",(req,res)=>{
    console.log("Data saved");    
    let {username , password}=req.params;
    let html =`The data is @${username}`;
    res.send(html);
})

