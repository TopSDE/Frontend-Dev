var p = document.getElementById("parent")
var c = document.getElementById("child")
p.addEventListener('click', function() {
    alert("I am Parent")
})

c.addEventListener('click', function() {
    alert("I am Child")
})