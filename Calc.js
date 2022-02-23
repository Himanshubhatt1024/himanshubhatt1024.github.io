function add(){
var x=document.getElementById('num1').value;
var y=document.getElementById('num2').value;
console.log(parseInt(x) + parseInt(y));
document.getElementById('result').innerHTML=(parseInt(x)+parseInt(y));
}

function sub(){
var x=document.getElementById('num1').value;
var y=document.getElementById('num2').value;
console.log(parseInt(x) - parseInt(y));
document.getElementById('result').innerHTML=(parseInt(x)-parseInt(y));
}

function multiply(){
var x=document.getElementById('num1').value;
var y=document.getElementById('num2').value;
console.log(parseInt(x) * parseInt(y));
document.getElementById('result').innerHTML=(parseInt(x)*parseInt(y));
}

function divide(){
var x=document.getElementById('num1').value;
var y=document.getElementById('num2').value;
console.log(parseInt(x) / parseInt(y));
document.getElementById('result').innerHTML=(parseInt(x)/parseInt(y));
}

function hello(){
console.log('Hello World');
}

