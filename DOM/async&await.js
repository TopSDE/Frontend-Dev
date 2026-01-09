async function task() {
    var x = await 2 * 4
    console.log(("Ctrl is Inside Func"));
    return x
}
var res = task()

res.then(function(result){
    console.log(result);
})

console.log("Outside the func")