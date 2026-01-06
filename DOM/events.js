// var x=document.getElementById("btn")
// console.log(x);
// x.addEventListener('click',function(){
//     document.writeIn('yes iam click event')
// })

function demo(){
    console.log("iam onclick event");
}

// function task(){
//     alert('iam onclick event')
// }

// var z=document.getElementById("container");
// z.addEventListener('mouseover', function(){
//     z.style.backgroundColor="red"
//     z.style.color="white"
// })

// function display(){
//     alert("form was submitted");
// }

// function task(){
//     alert("you have pressed a key from the keyboard");
// }

// var a = document.getElementById("box");
// a.addEventListener("contextmenu", function(x){
//     x.preventDefault();
// });

// select change event
var z2 = document.getElementById("vehicles");

z2.addEventListener("change", function () {
    console.log(this.value);
});
