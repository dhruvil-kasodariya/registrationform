const express = require("express");
const bodyParser=require("body-parser");
const registrationRouter =require("./routes/registration")
const loginRouter =require("./routes/login")


const app =express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/registration",registrationRouter);

app.use("/api/login",loginRouter)

app.listen(4000,(err)=>{
    if(err){console.log("some Error")}
    console.log("server runing at 4000 port");
})