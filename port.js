const express = require("express")
const app = express()
const port = 8080

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    "server is listining on port",port
})
console.log("its does not run forever");
