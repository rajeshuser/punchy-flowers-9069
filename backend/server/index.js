const express = require("express");
const {connection} = require("./config/db")
require("dotenv").config()
const {userRouter} = require("./routes/user.routes.js")
const cors = require("cors")
const app = express();



app.use(express.json())
app.use(cors())

// user route 
app.use("/users", userRouter)
// middleware
// app.use()
//products route


//Connection to server
app.listen(process.env.port, async() => {
    try{
        await connection
        console.log("connected to DB")
    }
    catch(err){
        console.log("Not connected to DB");
        console.log(er)
    }
    console.log(`Server is running at ${process.env.port}`)
})