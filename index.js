const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use( (req, res) => {
  console.log("Request recieved");
   res.send({
    name : "Apple",
    Color : "Red"
   }); 
})