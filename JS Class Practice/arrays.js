//!Array:-collection of elements.array is in heterogenous in nature.
//!By using array literals
//!syntax:-var/let/const arrayname=[data1,data2,data3...dataN]
var arr=["js",true,21,undefined,10.23]
console.log(arr);
console.log(arr[0]);


//!By using new keyword
//!syntax:-var/let/const arrayname=new Array();
let v=new Array();
console.log(v);
v[0]="react";
v[1]=100;
v[2]=null;
v[3]=false;
console.log(v);

//!By using constructor function
//!syntax:-var/let/const arrayname=new Array(data1,data2,data3...dataN);
const nonveg=new Array("biryani",'chicken tikka',"fish fry")
console.log(nonveg);

//!concat():=
var x=[21,31,"sheela",false]
var y=[10,20]
var z=[undefined,43]
console.log(x.concat(y,z));
console.log(x);
console.log(y);
//!push():-
var x=[21,31,"sheela",false]
x.push(100,200)
console.log(x);
//!unshift():-
var x=[21,31,"sheela",false]
x.unshift(300,400)
console.log(x);
//!pop():-
var x=[21,31,"sheela",false]
console.log(x.pop());
console.log(x);
//!shift():=
var x=[21,31,"sheela",false]
console.log(x.shift());
//!reverse():-
var x=[21,31,"sheela",false]
console.log(x.reverse());
//!slice():-
var x=[21,31,"sheela",false]
// console.log(x.slice(1,3));
console.log(x.slice(3,4));
console.log(x.slice(-3,2));
//!splice():-
//!syntax:-splice(starting point,delete count,[add element])
var x=[21,31,"sheela",false]
// console.log(x.splice(2,1));
// console.log(x);
// console.log(x.splice(0,2));
console.log(x.splice(5,0,1000,2000,3000));
console.log(x);
//!includes():-
console.log(x.includes(211));
//!indexOf():-
console.log(x.indexOf(false));
//!join():-
var x1=['c','a','t']
console.log(x1.join(''));
//!at():-
console.log(http://x1.at(1));
//!tostring():-
var x1=['c','a','t']
console.log(x1.toString());
//!array.from():-
let z1='morning';
console.log(Array.from(z1));
//!sort():-
var x1=['c','a','t']
console.log(x1.sort());
//!find out the biggest element in an array.
//!find out the smallest element in an array.
//!find out the biggest element in an array without changing existing array.
//! find out the smallest element in an array without changing existing array.
//!Arrange the element in decending format.
//!ex:-var x=[76,34,21,9,56,87]

// -------------------------------------------------------------------

//!object:-A real world enity having both states and behaviour.
//!ex:-car,bike,mobile,laptop,chair,bottle..etc
//!By using object literals
var emp={
    Ename:"sheela",
    Eid:21,
    Esal:"20k"
}
console.log(emp);
//!dot notation
console.log(emp.Eid);
console.log(emp.Esal);
//!bracket notation
console.log(emp['Ename']);



//!By using new keyword
let car=new Object();
console.log(car);
car.Cname="bmw";
car.Cprice="1cr";
car.Ccolor="red";
console.log(car);
console.log(car.Cname);



//!By using constructor function

console.log(this);//window


function pen(Pname,Pprice,Pcolor){
    this.Pname=Pname;
    this.Pcolor=Pcolor;
    this.Pprice=Pprice

}
var x=new pen('cello','10rs','red')
console.log(x.Pname);
console.log(x.Pcolor);


var emp={
    Ename:"sheela",
    Eid:21,
    Esal:"20k"
}
console.log(emp);
var stu={
    Sname:"mala",
    Sid:31
}
console.log(Object.keys(emp));
console.log(Object.values(emp));
console.log(Object.entries(emp));
console.log(Object.assign({},emp,stu));
console.log(emp.hasOwnProperty('Eid'));//true
console.log(Object.seal(emp));//making the object as mutable object
emp.Ename="mala";
console.log(emp);
console.log(Object.isSealed(emp));
console.log(Object.freeze(stu));//making the object as immutable object
console.log(stu.Sid="41");
console.log(Object.isFrozen(stu));

// -------------------------------------------------------------------


//!math:-
console.log(Math);
console.log(Math.random());//0 to 1
console.log(Math.round(2.74));//nearest
console.log(Math.floor(3.67));//lowest
console.log(Math.ceil(62.45));//highest
console.log(Math.trunc(89.3456));//interger

//!write a code to generate a random number between  1 to 20.// 0 to 19.999 (0 to 20)
var x=Math.floor(Math.random()*20)+1
console.log(x);

//!find out the sqaure root of 64.
console.log(Math.sqrt(64));

//!write a code to generate a random number between  10 to 100.

// -------------------------------------------------------------------

var x=new Date();
console.log(x);
var x=new Date('2020-03-10')
console.log(x);
var y=new Date(1984,4)
console.log(y);
//!1s=1000ms

// -------------------------------------------------------------------

//!how to arrange the elements in descending format
var x=[76,34,21,9,56,87]
let res=[...x].sort((a,b)=>b-a)
console.log(res);

//!return type function 

function calsum(p,c,m){
return p+c+m
}

var r=calsum(90,80,100)

function calper(sum){
    var s=sum/300*100
    console.log(s);
    

}
calper(r) 

// -------------------------------------------------------------------
//!for in:-It is used to iterate the array over index value.
var x=[45,23,78,41,7,21]
for(let index in x){
    console.log(index);
    console.log(x[index]);//45 23 78 41 7 21
}
//!object:-it is used to iterate the object over the keys
var emp={
    Ename:"shiva",
    Eid:21,
    Esal:'21lpa'
}
console.log(emp);
for(var obj in emp){
    console.log(obj);
    console.log(emp[obj]);
    
    
}
//!for of:-it is used to iterate the array over the elements.
var x=[45,23,78,41,7,21]
for(let arr of x){
    console.log(arr);
   
}

var emp={
    Ename:"shiva",
    Eid:21,
    Esal:'21lpa'
}
console.log(emp);
for(var obj of Object.keys(emp)){
    console.log(obj);
    console.log(emp[obj]);
    
    
}
//!forEach():-
var x=[45,23,78,41,7,21]
console.log(x);
x.forEach((ele,index,x)=>{console.log(ele,index,x);
})

//!map():-
var x=[45,23,78,41,7,21]
var http://res=x.map((ele,incex,x)=>{return ele+ele})
console.log(res);[90,46]
//!fliter():-
var x=[45,23,78,41,7,21]
var res=x.filter((ele,index,x)=>{return ele>30})
console.log(res);

//!reduce():-
var x=[45,23,78,41,7,21]
var res=x.reduce((previous,ele,index,x)=>{
    console.log(previous,ele,index,x);
    return previous+ele;//0+45=45+23=68+78=146+41=187+7=194+21=215
    

},0)
console.log(res);

// -------------------------------------------------------------------

console.log(window);
//!screen:-
console.log(window.screen);
console.log(screen);
console.log(screen.height);
console.log(screen.width);
console.log(screen.availHeight);
console.log(screen.availWidth);
console.log(screen.pixelDepth);

//!location:-
console.log(window.location);
console.log(location.href);
console.log(location.hostname);
console.log(location.protocol);
console.log(location.pathname);
// console.log(location.assign('https://www.amazon.com'));

//!history:-
console.log(history);
console.log(history.back());
console.log(history.forward());

//!navigator:-
console.log(navigator);
console.log(navigator.appCodeName);
console.log(navigator.platform);
console.log(navigator.cookieEnabled);

//!alert():-
// alert("Dont share your otp");

// let age=prompt("Enter your age");
// if(age>18){
//     console.log("eligible for vote");
    
// }
// else{
//     console.log('not eligible');
    
// }


var x2=confirm('do you want to continue?')
console.log(x2);

// -------------------------------------------------------------------

//!length:-
var x='sheela';
console.log(x.length);//6
//!slice():-
//!syntax:-slice(starting index,ending index)
var x1='apple,banana,kiwi,mango'
console.log(x1.slice(6,12));
console.log(x1.slice(0,5));
console.log(x1.slice(-10,-6));
console.log(x1.slice(-17,-11));
console.log(x1.slice(-23,-18));
//!substring():-
var x1='apple,banana,kiwi,mango'
console.log(x1.substring(6,12));
//!substr():-
var x1='apple,banana,kiwi,mango'
console.log(x1.substr(0,5));
//!repeat():-
var sub='java';
console.log(sub.repeat(9));
//!includes():-
console.log(x1.includes('mango'));
//!indexOf():-
var z='i love cats,bcz cats are cute';
console.log(z.indexOf('cats'));//7
//!lastIndexOf():-
console.log(z.lastIndexOf('cats'));//16
//!replace():
var z='i love cats,bcz cats are cute';
console.log(z.replace('cats','dogs'));
//!replaceAll():-
console.log(z.replaceAll('cats','dogs'));
//!chatAt():-
var sub='java';
console.log(sub.charAt(1));//a
//!charCodeAt():-
console.log(sub.charCodeAt(1));
//!trim():-
var z1='   mala   ';
console.log(z1.length);
var res=z1.trim();
console.log(res.length);
//!trimStart():-
var z1='   mala   ';
console.log(z1.length);//10
var res=z1.trimStart();
console.log(res.length);
//!trimEnd():-
var z1='   mala   ';
console.log(z1.length);
var res=z1.trimEnd();
console.log(res.length);
//!split():-
var sub='java';
console.log(sub.split(''));
//!concat():-
let surname="simham";
let name="lavanya";
console.log(surname.concat(name));
//!toUpperCase():-
console.log(surname.toUpperCase());
//!toLowerCase():-
let z3='PARROT';
console.log(z3.toLowerCase());
//!padStart():-
// let course='web';
// console.log(course.padStart(7,'tech'));
//!padEnd:-
let course='web';
console.log(course.padEnd(7,'tech'));

// -------------------------------------------------------------------

// var x=document.getElementById("btn")
// console.log(x);
// x.addEventListener('click',function(){
//     document.writeln('yes iam click event')
    
// })

// function demo(){
//     console.log("Iam onclick event");
    
// }

// function task(){
//     alert('iam ondblclick event')
// }


// var z=document.getElementById("container");
// z.addEventListener('mouseover',function(){
//     z.style.backgroundColor="red"
//     z.style.color="white"
// })


// function display(){
//     alert("form was submitted")
// }

// function task(){
//     alert("you have pressed a key from the keyboard")
// }


// var a=document.getElementById("box");
// a.addEventListener('contextmenu',function(x){
//     x.preventDefault()
    

// })

var z2=document.getElementById("vehicles")
z2.addEventListener('change',function(){
    console.log(this.value);
    
}) 

// --------------------------------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Events in js</title>
</head>
<body>
    <!-- <button id="btn">Click</button>

    <p onclick="demo()">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, natus?</p>

    <button ondblclick="task()">Click me</button> -->

    <!-- <div id="container">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia amet quia aspernatur consequatur quam doloribus reprehenderit autem blanditiis fuga eaque.
    </div>

    <form action="" onsubmit="display()">
        <input type="text" name="username">
        <button>submit</button>
    </form>

    <input type="text" onkeypress="task()"> -->


<!-- 
<div id="box" style="background-color: yellow;height: 400px;">
    contextmenu is in disabled state
</div> -->

<select name="Automobile" id="vehicles">
    <option value="Bike">Bike</option>
    <option value="Car">Car</option>
    <option value="Auto">Auto</option>
</select>
    <script src="./events.js"></script>
</body>
</html> 

// ---------------------------------------------------------------------

//!copy
var x=[56,76,98,12,45]
console.log(x);
var x1=[...x]
console.log(x1);

var x=[56,76,98,12,45]
var arr2=["js",...x]
console.log(arr2);
//!merge

var x=[56,76,98,12,45]
var y=[90,100]
var res=[...x,...y]
console.log(res);

//!copy
var emp={
    Ename:"sheela",
    Eid:21
}

var obj={...emp}
console.log(obj);

//!merge
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

// --------------------------------------------------------

// var x=document.getElementById("para");
// var res=setInterval(function(){x.innerHTML+="iampara"},3000)

// function demo(){
//     clearInterval(res)
// }


var x=document.getElementById("para");
var res=setTimeout(function(){x.innerHTML+="iampara"},3000)


function demo(){
    clearTimeout(res)
} 

// --------------------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timedelays in js</title>
</head>
<body>
    <p id="para"></p>
    <button onclick="demo()">Click</button>
    <script src="./timedelays.js"></script>
</body>
</html> 

// --------------------------------------------------------

// function local(){
//     localStorage.setItem('username','sheela')
//     alert('Data has been stored into the browser')
// }

// function display(){
    
//     var x1=localStorage.getItem('username')
//     document.getElementById("para").innerHTML=x1
// }


function local(){
    sessionStorage.setItem('username','sheela')
    alert('Data has been stored into the browser')
}

function display(){
    
    var x1=sessionStorage.getItem('username')
    document.getElementById("para").innerHTML=x1
}

// --------------------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webstorages in js</title>
</head>
<body>
    <button onclick="local()">savethedata</button>
    <button onclick="display()">DisplayData</button>
    <p id="para"></p>
    <script src="./webstorage.js"></script>
</body>
</html> 

// --------------------------------------------------------

// var p=document.getElementById("parent")
// var c=document.getElementById("child")
// p.addEventListener('click',function(){
//     alert("iam parent")
// })
// c.addEventListener('click',function(){
//     alert("iam child")
// })


// var p=document.getElementById("parent")
// var c=document.getElementById("child")
// p.addEventListener('click',function(){
//     alert("iam parent")
// },true)
// c.addEventListener('click',function(){
//     alert("iam child")
// })


function child(event){
    alert("iam child");
    if(document.getElementById('input').checked){
        event.stopPropagation()
    }
}

function parent(){
    alert("iam parent")
} 

// --------------------------------------------------------

console.log(window);
//!screen:-
console.log(window.screen);
console.log(screen);
console.log(screen.height);
console.log(screen.width);
console.log(screen.availHeight);
console.log(screen.availWidth);
console.log(screen.pixelDepth);

//!location:-
console.log(window.location);
console.log(location.href);
console.log(location.hostname);
console.log(location.protocol);
console.log(location.pathname);
// console.log(location.assign('https://www.amazon.com'));

//!history:-
console.log(history);
console.log(history.back());
console.log(history.forward());

//!navigator:-
console.log(navigator);
console.log(navigator.appCodeName);
console.log(navigator.platform);
console.log(navigator.cookieEnabled);

//!alert():-
// alert("Dont share your otp");

// let age=prompt("Enter your age");
// if(age>18){
//     console.log("eligible for vote");
    
// }
// else{
//     console.log('not eligible');
    
// }


var x2=confirm('do you want to continue?')
console.log(x2);

// --------------------------------------------------------

var p=new Promise(function(reslove,reject){
    var x=true;
    if(x){
        reslove("promise done")
    }
    else{
        reject('promise not done')
    }

})
console.log(p);
//!rejected
p.catch(function(a){console.log(a);
})
//!fullfilled
p.then(function(a){
    console.log(a);
    
})

// --------------------------------------------------------

