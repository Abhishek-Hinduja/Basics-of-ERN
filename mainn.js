var express = require("express")
var fs = require("fs")

var app = express()
app.use( logger )

app.use(express.json())
app.use(express.static("todo"))



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

function logger(req,res,next){
    console.log("Request received at ", Date.now())
    console.log("Request received at ", req.url)
    console.log("Request received at ", req.method)
    next()
}

app.listen(3000, function(){
    console.log("Server is running on 3000")
})

