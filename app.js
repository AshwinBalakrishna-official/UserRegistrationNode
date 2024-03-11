const express = require('express');
const mysql = require('mysql');

// connect a database
const db= 
    mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password"
      });


      db.connect(function(err) {
        if (err) throw err;
        console.log("Connected! Please check DB to add new schema");
      });
const app = express();


app.listen("5003",()=>{console.log("Server is running at 5k port")});

app.get("/",(req,res)=>{
    res.send("<h1>HOME PAGE</h1>")
})

