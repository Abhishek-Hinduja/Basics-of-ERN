var http = require("http")
var fs = require("fs")

http.createServer(function(req,res){
    var method = req.method
    var url = req.url
    

    if (method === "GET"){      
        if (url === "/"){
            fs.readFile("./todo/indexing.html", "utf-8", function(err,data){
                res.end(data)
                
            })
        }
        else if (url === "/script.js"){
            fs.readFile("./todo/scriptt.js", "utf-8", function(err,data){
                res.end(data)
                
            })
        }
    }
}).listen(3100, ()=>{
    console.log("Server is Running on 3100")
})