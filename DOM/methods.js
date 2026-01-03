var x = document.getElementsByClassName('anchor')
console.log(x)

var x = document.getElementById('head')
console.log(x)

var x = document.getElementsByTagName('section')
console.log(x)

var x = document.querySelector('div')
console.log(x)

var x = document.querySelectorAll('div')
console.log(x)

//!createElement:-
var x=document.createElement('h1');
console.log(x);
x.innerHTML='i am heading tag'

// var y=document.getElementById("parent")
// var z=document.getElementById("child")
// y.removeChild(z)
// console.log(y);

// var y=document.getElementById("parent")
// var z=document.getElementById("child")
// var create=document.createElement("span");
// y.replaceChild(create,z)
// console.log(y);

var y=document.getElementById("parent")
var create=document.createElement("span");
// create.innerHTML='This is Span'
y.appendChild(create)
console.log(y)