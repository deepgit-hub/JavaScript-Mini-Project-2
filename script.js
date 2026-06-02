<script>
    var u = document.getElementById("task")
    var input = document.getElementById("input")
    function add()
    {
        var listitem=document.createElement("li")
        
        listitem.innerHTML=input.value + "<button onclick=deleteItem(event)>Delete</button>"
        
        u.append(listitem)
        
    }
    function deleteItem(event)
    {
        event.target.parentElement.remove()
    }
</script>
