const express = require('express');
const mysql = require('mysql');

const app = express();


app.listen("5003",()=>{console.log("Server is running at 5k port")});

app.get("/",(req,res)=>{
    res.send("<h1>HOME PAGE</h1>")
})