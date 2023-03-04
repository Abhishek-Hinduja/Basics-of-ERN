var http = require("http");

var port = 3100
var server = http.createServer(function(req,res){
    if (req.method === "GET"){
        if (req.url === "/"){
            res.end("Its an Home page")
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