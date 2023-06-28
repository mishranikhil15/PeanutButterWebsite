const express=require('express');
const {connection}=require("./config/db");
const {userrouter}=require("./routes/userroute")

const cors=require('cors');

const app=express();

require('dotenv').config();

app.use(express.json());

app.use(cors ({
    origin :"*"
}))

app.get("/",(req,res)=>{
    res.send("welcome")
})


app.use("/users",userrouter);

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log('Connected to Db');
        console.log(`Server is running on port ${process.env.port}`)
    } catch (error) {
        console.log("Trouble while connecting to Db");
    }
})