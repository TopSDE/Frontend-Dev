/*
function local() {
    localStorage.setItem('name', 'Punith')
    alert('Data has been stored Successfully')
}

function display() {
    var x1 = localStorage.getItem('name')
    document.getElementById('para').innerHTML = x1
}
*/

function local() {
    sessionStorage.setItem('name', 'Punith')
    alert('Data has been stored Successfully')
}

function display() {
    var x1 = sessionStorage.getItem('name')
    document.getElementById('para').innerHTML = x1
}