const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get( "/",(req, res) => {
  console.log("Request recieved");
   res.send("The Fruit list is here "); 
});


app.get( "/apple",(req, res) => {
  console.log("Request recieved");
   res.send("The Fruit is apple"); 
});

app.get("/mango",(req,res)=>{
    console.log("Request recieved");
    res.send("The Fruit is mango");
});

app.get("/Orange",(req,res)=>{
    console.log("Request recieved");
    res.send("The Fruit is Orange")
});

app.post("/",(req,res)=>{
    console.log("Request recieved");
    res.send("The response is post type");
});

app.use((req,res)=>{
    console.log("Request recieved");
    res.send("The response is not acheived");
});

