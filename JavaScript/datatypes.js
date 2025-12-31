// Primitive data types store a single, simple value and are immutable.

// 1️ Number
    // let a = 10 / 0
    // let b = 5.7
    // console.log(a)
    // console.log(b)

    // let a = 10 / 0 // -> output = Infinity
    // let b = "abc" / 2 // -> output = NaN => “Not a Number” and
    // It represents an invalid numeric result in JavaScript.
    // console.log(a)
    // console.log(b)

    // let a = "5.5";
    // let b = 5.5;
    // let a = null
    // let b
    // console.log(typeof a); // "object"
    // console.log(typeof b); // "undefined"

    // console.log(a == b); // => “Are values equal after converting types?”
    // true → because "loose equality (==)" treats null and undefined as equal

    // console.log(a === b); // => “Are these exactly the same (same type + same value)? without conversion”
    // false → because "strict equality (===)" requires same type and same value

// 2️ String
    // - Immutable (cannot be changed)
    // - Can use ' ', " ", or ` `
    // Ex:
        // let s1 = "Hi";
        // let s2 = 'Hello';
        // let s3 = `Hey`;

    // Extra cases:
        // "5" + 2 = "52" 
        // "5" - 2 = 3 

// 3️ Boolean
    // Only true or false

// 4️ Undefined
    // Variable declared but no value assigned
    // let x;

// 5️ Null
    // Represents intentional empty value
    // let x = null;

// 6️ BigInt
    // - Used for very large numbers
    // - Ends with n
    // let big = 12345678901234567890n;

    // Extra rules ⚠️
    //     big + 10   // ❌ error
    //     big + 10n  // ✅

// 7️ Symbol
    // 👉 It represents a unique and immutable value
    // Ex:
    let s1 = Symbol();
    let s2 = Symbol();
    console.log(s1 === s2)   // false

// What are Non-Primitive Data Types? (Very simple)
    // 👉 Non-primitive data types can store multiple values
    // 👉 They are objects and are mutable (can be changed)