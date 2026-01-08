var p = new Promise(function(resolve, reject) {
    var x = true
    if (x) {
        resolve('Promise done')
    }
    else {
        reject('Promise not done')
    }
})
console.log(p)

p.catch(function(a){
    console.log(a);
})

p.then(function(a){
    console.log(a);
})