var x = [76, 34, 21, 9, 56, 87];

// Biggest element in an array
var max = x[0];
for (let i = 1; i < x.length; i++) {
    if (x[i] > max) {
        max = x[i];
    }
}
console.log("Biggest element:", max);

// Smallest element in an array
var min = x[0];
for (let i = 1; i < x.length; i++) {
    if (x[i] < min) {
        min = x[i];
    }
}
console.log("Smallest element:", min);

// Biggest element without changing the existing array
var biggest = Math.max(...x);
console.log("Biggest (without change):", biggest);

// Smallest element without changing the existing array
var smallest = Math.min(...x);
console.log("Smallest (without change):", smallest);

// Arrange elements in descending order
x.sort((a, b) => b - a);
console.log("Descending order:", x);

