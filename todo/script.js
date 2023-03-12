var input = document.getElementById("input")
var btn = document.getElementById("btn")

var parent = document.getElementById("parent")

btn.addEventListener("click", function(){
    if (input.value){

        var request = new XMLHttpRequest()
        request.open("post", "/save")
        request.setRequestHeader("Content-type", "application/json")
        request.send(JSON.stringify({todo : input.value}))

        request.addEventListener("load", function(){
            var li = document.createElement("li")
            li.innerHTML = input.value
    
            parent.appendChild(li)
    
            input.value = ""
        })
       
    }
})

var request = new XMLHttpRequest()
request.open("get", "/todo")
request.send()

request.addEventListener("load", function(){
    var todos = JSON.parse(request.responseText)

    todos.forEach(function(task){
        var li = document.createElement("li")
        li.innerHTML = task.todo
    
        parent.appendChild(li)
    
        input.value = ""
    });

})