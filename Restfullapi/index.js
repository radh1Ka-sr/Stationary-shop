const express= require("express");
const coursesrouter=require("./routes/courses");
const bodyParser= require('body-parser')
require("dotenv").config()
//for mongodb connec use mongoose
const mongoose= require('mongoose')

const app=express();


//middleware to regester all the router of route into this
app.use(bodyParser.json)
app.use("/api/v1/courses", coursesrouter);

 mongoose.connect(process.env.MONGO_URL)
//here app.listen is used to run the url on port 2000 and then callback func is called after that
app.listen(process.env.PORT, ()=>{
console.log("server started on ....");
});