
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

//USE MIDDLEWARE
app.use(cros());
app.use(express());

app.get('/', (req , res)=>{
    res.send("HELLO WORLD FROM NODE JS || EXPRESS")
})

app.listen(port,()=>{
    console.log("CRUD SERVER IS RUNNING ")
})