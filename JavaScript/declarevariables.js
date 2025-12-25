// 1️⃣ var Features
var x // declaration
var x = 10 // declaration + initialization
x = 20 // reinitialization
var x // Redeclaration is ignored
var x = 7 // redeclaration + reinitialization
console.log(x)

// function scope = i can only access global scope
function test() {
    var a = 5
}

// console.log(a) // ❌ error (function scope)

// 👉 Hoisting means: JavaScript moves variable and 
//    function declarations to the top of their scope before execution.
console.log(c); // undefined (no error)
var c = 10;

    // What JavaScript understands internally of above code:
    // var x;          // declaration moved to top
    // console.log(x);
    // x = 10;         // assignment stays here

    // Output => undefined
    // ⚠️ Only declarations are hoisted, not values.

// 2️⃣ let Features

var y // declaration
var y = 10 // declaration + initialization
y = 20 // reinitialization
var y // Redeclaration is ignored
var y = 20 // redeclaration + reinitialization
console.log(y)
