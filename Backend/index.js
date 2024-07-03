const express=require("express")
const cors = require('cors');
const dotenv=require("dotenv").config()


const app=express()
app.use(cors())


app.get("/chats",(req,res)=> {
    res.send({
        "name": "Alice",
        "age": 25,
        "city": "San Francisco",
        "email": "alice@example.com",
        "isActive": true
      }
      )
})
app.listen(3000,()=> {
    console.log("started")
})