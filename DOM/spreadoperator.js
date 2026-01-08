// copy
var x=[56,76,98,12,45]
console.log(x);
var x1=[...x]
console.log(x1);

var x=[56,76,98,12,45]
var arr2=["js",...x]
console.log(arr2);

// merge
var x=[56,76,98,12,45]
var y=[90,100]
var res=[...x,...y]
console.log(res);

// copy
var emp={
    Ename:"sheela",
    Eid:21
}

var obj={...emp}
console.log(obj);

// merge
var emp={
    Ename:"sheela",
    Eid:21
}

var stu={
    Sname:"mala",
    Sid:31
}
var newobj={...stu,...emp}
console.log(newobj);

let x3="webtech";
let x2=[...x3].join('')
console.log(x2);