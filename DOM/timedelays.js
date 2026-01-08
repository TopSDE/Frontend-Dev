// var x = document.getElementById("para");

// var res = setInterval(function(){
//     x.innerHTML += "iampara";
// }, 3000)

// function demo(){
//     clearInterval(res)
// }

var x = document.getElementById("para");

var res = setTimeout(function(){
    x.innerHTML += "iampara";
}, 5000)

function demo(){
    clearTimeout(res)
}
