var express = require("express")
var fs = require("fs")

var app = express()
app.use(express.json())

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

app.post("/save", function(req,res){
    
    fs.readFile("./db.txt", "utf-8", function(err,data){
        var todos = []

        if (data.length > 0){
            todos = JSON.parse(data)
        }
        todos.push(req.body)

        fs.writeFile("./db.txt", JSON.stringify(todos), function(err){
            if (err){
                res.end("Error Ocurred")
            }
            else{
                res.end()
            }
        })
    })
})

app.get("/todo", function(req,res){
    fs.readFile("./db.txt", "utf-8", function(err,data){
        res.end(data)
    })
})

app.listen(3000, function(){
    console.log("Server is running on 3000")
})

