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

// -------------------------------------------------
// ANONYMOUS FUNC + FUNC WITH EXPRESSION

/*
let x = function(a,b) {
    console.log("Anon Func In")
    console.log(a + b)
}
*/

// Here the Func that passed as a Value -> This is called as First Class Func
// x(1,2)

// -------------------------------------------------
// NESTED FUNC

// 1️ “A function declared inside another function is a nested function”

/*
function parent() {
    function child() {
        console.log("I am Child")
    }
    child()
}
parent()
*/

// 2️ “Nested functions are unidirectional
// unidirectional = 
    // 👉 Information flows only in one direction —
    // from the outer function → inner function,
    // not the other way around.

/*
function parent() {
    const x = 10
    function child() {
        console.log(x)
    }
    child()
}
parent()
*/

// 3️ “Lexical scoping / Scope chaining”

// LEXICAL SCOPING — Lexical scoping means a function accesses variables 
// based on where it is defined in the code, not where it is called from.
/*
Ex:
    let x = 100

    function parent() {
        let x = 10
        function child() {
            console.log(x)
        }
        return child
    }

    let fn = parent()
    fn()   // prints 10
*/
    // 👉 JS says:
        // “Where was child defined?
        // Inside parent.
        // So I’ll use parent’s x.”



// SCOPE CHAINING — 👉 Scope chaining is the search process JS uses to find a variable.
/*
Ex:
    let x = 100

    function parent() {
        let y = 20

        function child() {
            let z = 5
            console.log(x)
            console.log(y)
            console.log(z)
        }

        child()
    }
    parent()
*/
// When child() runs:
// Look in child scope → z
//     - Not found? Go to parent scope → y
//     - Not found? Go to global scope → x
//     - This step-by-step searching is called:
//     - 👉 Lexical Scoping / Scope Chaining



// 4️ “When child needs parent property, closure is formed”
// “What exactly is a closure?” Definition (simple):
//     A closure is a function that remembers 
//     variables from its outer scope even after 
//     the outer function has finished execution.

/*
// Ex:
    function parent() {
        let count = 0;

        function child() {
            count++;
            console.log(count);
        }

        return child;
    }

    const fn = parent();
    fn();
    fn();
*/
    // What happens internally?
    //     parent() finishes execution
    //     Normally its variables should be destroyed
    //     BUT child() still needs count
    //     👉 So JavaScript creates a closure



// 5️ “Closure consists of only required properties”

//     In the above example:
//     let count = 0;
//     Only count is kept alive — not the entire parent function

//     So closure = 👉 child function + required outer variables


/*
6️ “Block is also treated as scope since ES6”
    Example
    if (true) {
        let x = 10;
        const y = 20;
    }
    // console.log(x); ❌ error

    - let and const are block scoped
    - Each {} creates a new scope
    - Closures also work with block scope
*/


/*
7️ “Closures are useful in event-driven JavaScript”
    Example (very important)
    function counter() {
        let count = 0;

        return function () {
            count++;
            console.log(count);
        };
    }

    const clickCounter = counter();
    clickCounter(); // 1
    clickCounter(); // 2
    clickCounter(); // 3

    Why this is useful
        - Events happen at different times
        - Closure preserves state (count)
        - Without global variables

    Very useful in:
        - button clicks
        - timers
        - callbacks
*/