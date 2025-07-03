const express = require('express')
const app = express()
const port = 3001;

app.listen(port,()=>{
    console.log(`The port ${port} is accesed`);
});

app.get("/",(req,res)=>{
    console.log("R");
    res.send("Hi");
})

app.get("/search",(req,res)=>{
    console.log("Search completed");
    
    console.log(res.query);
    res.send(`The query is ${res.query}`);
})

