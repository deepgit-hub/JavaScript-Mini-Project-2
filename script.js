    var input = document.getElementById("input")
    var t = document.getElementById("task")
    var total = document.getElementById("total")
    var completed = document.getElementById("completed")
    var totalcount = 0
    var completedcount = 0
    function add()
    {
        var listitem=document.createElement("li")
        
        listitem.innerHTML=input.value + "<button onclick='completetask(event)'>Completed</button>" + "<button onclick='deleteItem(event)'>Delete</button>"
        
        t.append(listitem)
        input.value=""
        totalcount++
        total.textContent=totalcount
        
    }
    function completetask(event)
    {
        var t = event.target.parentElement
        t.style.textDecoration = "line-through"
        completedcount++
        completed.textContent=completedcount
        event.target.disabled = true
        event.target.textContent = "Done-->"
    }
    function deleteItem(event)
    {
        event.target.parentElement.remove()
    }
