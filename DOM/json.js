var emp = {
    Ename: "sheela",
    Eid: 21,
    Esal: '40k',
    Eskills: ['html', 'css', 'js'],
    Eaddress: {
        Earea: 'abc area',
        Ecity: "bangalore",
        Epincode: 123456
    }
}

console.log(emp)
var res = JSON.stringify(emp)
console.log(res)
console.log(JSON.parse(res))