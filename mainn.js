var express = require("express")
var fs = require("fs")

var app = express()

app.get("/", function(req,res){
    fs.readFile("./todo/indexing.html", "utf-8", function(err,data){
        res.end(data)
    })
})

app.get("/scriptt.js", function(req,res){
    fs.readFile("./todo/scriptt.js", "utf-8", function(err,data){
        res.end(data)
    })
})

app.listen(3000, function(){
    console.log("Server is running on 3000")
})