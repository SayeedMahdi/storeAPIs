const express = require("express");
const app =express();
const middlewarenotfound = require("./middleware/not-found");
const errhandler = require("./middleware/error-handler");

app.use(express.json());
const port =process.env.PORT || 3000;
const start = async()=>{
    try {
        app.listen(port , console.log(`listen to port: ${port}`))
    } catch (error) {
        console.log(error)
    }
}
app.get("/",(req,res)=>{
    res.send("<h1>this is for page one</h1> <a href='/api/v1/produscts'>products</a>")
})
//middle wares
app.use(middlewarenotfound);
app.use(errhandler);
start();
//get a rout
