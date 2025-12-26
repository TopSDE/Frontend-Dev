// 1️⃣var Features
var x // declaration --> "undefined (no error)"      --> "YES"
x = 10 // initialisation                             --> "YES"
//var x = 10 // declaration + initialization         --> "YES"
//x = 20 // reinitialization                         --> "YES"
//var x // Redeclaration --> is ignored              --> "YES"
//var x = 7 // redeclaration + reinitialization      --> "YES"
console.log(x)


// scope of var = Func Scope : a variable is declared inside a function, 
// I cannot access it outside the function.
// If it is declared inside a block, I can access it outside the block.
function test() {
    var a = 77
}
//console.log(a) // ❌ error (function scope)


// 👉 Hoisting means: JavaScript moves variable and 
//    function declarations to the top of their scope before execution.
//console.log(c); // "undefined (no error)"
var c = 10;

    // What JavaScript understands internally of above code:
    // var x;          // declaration moved to top
    // console.log(x);
    // x = 10;         // assignment stays here

    // Output => undefined
    // ⚠️ Only declarations are hoisted, not values.

// -------------------------------------------------------------------------------

// 2️⃣let Features

//let y // declaration --> "undefined (no error)"      --> "YES"
//y = 8 // initialisation                              --> "YES"
//let y = 10 // declaration + initialization           --> "YES"
//y = 20 // reinitialization                           --> "YES"

//let y // Redeclaration                               --> "NO"
//let y = 30 // redeclaration + reinitialization       --> "NO"

//console.log(y)

// scope of let = Func Scope nd Block Scope: 
// If a variable is declared inside a function OR inside a block, 
// I cannot access it outside.
function test() {
    let a = 5
    //const a = 10
}
//console.log(a)


// Hoisting cant be done Here
//console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
//let b = 10;

// -------------------------------------------------------------------------------

// 3️⃣const Features

//const z // declaration                            --> "NO"
//z = 10 // initialisation                          --> "NO"

const z = 10 // declaration + initialization        --> "YES"

//z = 20 // reinitialization                        --> "NO"
//const z // Redeclaration                          --> "NO"
//const z = 30 // redeclaration + reinitialization  --> "NO"

//console.log(z)


// scope of let = Func Scope nd Block Scope: 
// If a variable is declared inside a function OR inside a block, 
// I cannot access it outside.
function test() {
    //let a = 5
    const a = 10
}
//console.log(a)


// Hoisting cant be done Here
//console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
//let b = 10;