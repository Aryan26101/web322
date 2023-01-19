/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Aryan Rakeshbhai Rathod Student ID:129796215 Date: 19-01-2023
*
*  Cyclic Web App URL: https://easy-miniskirt-crab.cyclic.app/
*
*  GitHub Repository URL: https://github.com/Aryan26101/web322/tree/main
*
********************************************************************************/ 


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();


app.get("/", (req, res) => {
    res.send("Aryan Rakeshbhai Rathod 129796215");
});

app.listen(HTTP_PORT);