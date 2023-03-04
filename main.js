var http = require("http");
var fs = require("fs")

var port = 3100
var server = http.createServer(function(req,res){
    if (req.method === "GET"){
        if (req.url === "/"){
            fs.readFile("./index.html", "utf-8", function(err,data){
                if (err){
                    res.end("Ërror Occured")
                }
                else{
                    res.end(data)
                }
            })
        } 
        else if(req.url === "/about"){
            res.end("Its an About Page")
        }
        else if(req.url === "/contact"){
            res.end("Its an about page")
        }
        else{
            res.end("Invalid Endpoint")
        }
    }
    else{
        res.end("Invalid Request")
    }
})

server.listen(port, function(){
    console.log(`Server is live at ${port}`)
})