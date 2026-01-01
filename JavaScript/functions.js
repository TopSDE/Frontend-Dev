/*
function demo(a, b) {
    console.log(a / b) // Infinity
    console.log(a % b) // NaN
}
demo(1, 0)
*/

// Parameterized Function:
// Parameter: Parameter is nothing but a variable which is used to stores the arguments.
// Argument: Value or data passed in the function call statements.
/*
function sub(a,b) {
    console.log(a,b)
    console.log(a-b)
}
sub(20,30)
*/

// ----------------------------------------
// Anonymous Func + Func with Expression
let x = function(a,b) {
    console.log("Anon Func In")
    console.log(a + b)
}

// Here we pass Func as a Value -> This is called as First Class Func
x(1,2)
