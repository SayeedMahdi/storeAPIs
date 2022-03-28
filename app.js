const express = require("express");
const connectDB = require("./db/connect");
 require("express-async-errors");


const app =express();

 require("dotenv").config();
const middlewarenotfound = require("./middleware/not-found");
const errhandler = require("./middleware/error-handler");
const routes = require("./routes/products");
app.use(express.json());
app.use("/api/v1/products",routes); 
const port =process.env.PORT || 3000;
const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(`listen to port: ${port}`))
    } catch (error) {
        console.log(error)
    }
}
app.get("/",(req,res)=>{
    res.send("<h1>this is for page one</h1> <a href='/api/v1/products'>products</a>")
})
//middle wares
app.use(middlewarenotfound);
app.use(errhandler);
start();
//get a rout
