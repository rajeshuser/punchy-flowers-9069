const express = require("express");
const {connection} = require("./config/db")
require("dotenv").config()
const {userRouter} = require("./routes/user.routes")
const {storeRouter} = require("./routes/store.routes")
const {auth}=require("./middleware/auth.middleware");
const { iphoneRouter } = require("./routes/iphone.routes");
const { iwatchesRouter } = require("./routes/iwatches.routes");
const { airpodsRouter } = require("./routes/airpods.routes");

const app = express();

app.use(express.json())
app.use("/users",userRouter)
app.use(auth)
app.use("/stores",storeRouter)
app.use("/iphones", iphoneRouter)
app.use("/iwatches",iwatchesRouter)
app.use("/airpods",airpodsRouter)

app.listen(process.env.port, async() =>{
    try {
        await connection
        console.log("Connected to the DB");
    } catch (err) {
        console.log("Cannot connect to DB");
        console.log(err);
    }
    console.log(`Server is running at ${process.env.port}`);
})


