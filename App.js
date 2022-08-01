const express = require('express')
const app = express()
const dataRouter = require("./Routes/Data")

// app.get("/Home",function(req,res){
//     res.send("Home")
// })
app.use("/api",dataRouter)
app.listen(process.env.PORT||8080,function(){
    console.log("Application is running");
})

