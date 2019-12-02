const express = require("express");
const app = new express();
app.get("/", (req, res) =>{
    res.send("WELCOME");
})
const port = process.env.port || 3000;
app.listen(port, (req, res)=>{
    console.log("Listening port on ", port);
});