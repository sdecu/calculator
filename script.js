let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");
let doubleZero = document.querySelector(".doubleZero");
let ac = document.querySelector(".ac");
let erase = document.querySelector(".erase");
let remainder = document.querySelector(".remainder");
let divider = document.querySelector(".divider");
let multiplier = document.querySelector(".multiplier");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");
let para = document.querySelector("div p");

one.addEventListener("click", (event) => {temp = para.innerText;
    para.innerText=`${temp}1`});
two.addEventListener("click", (event) => {temp = para.innerText;
    para.innerText=`${temp}2`});
three.addEventListener("click", (event) => {temp = para.innerText;
    para.innerText=`${temp}3`});
four.addEventListener("click", (event) => {temp = para.innerText;
    para.innerText=`${temp}4`});
five.addEventListener("click", (event) => {temp = para.innerText;
    para.innerText=`${temp}5`});
six.addEventListener("click", (event) => {temp = para.innerText;
    para.innerText=`${temp}6`});
seven.addEventListener("click", (event) => {temp = para.innerText;
    para.innerText=`${temp}7`});
eight.addEventListener("click", (event) => {temp = para.innerText;
    para.innerText=`${temp}8`});
nine.addEventListener("click", (event) => {temp = para.innerText;
    para.innerText=`${temp}9`});
zero.addEventListener("click", (event) => {temp = para.innerText;
    para.innerText=`${temp}0`});
doubleZero.addEventListener("click", (event) => {temp = para.innerText;
    para.innerText=`${temp}00`});
ac.addEventListener("click", (event) => {temp = para.innerText;
    para.innerText=``});
erase.addEventListener("click", (event) => {str = para.innerText;
    para.innerText=`${str.slice(0, str.length - 1)}`});
    
remainder.addEventListener("click", (event) => {str = para.innerText;
    if (str.includes('-')) {
        para.innerText = str.replace('-', '%');
    } else if (str.includes('*')) {
        para.innerText = str.replace('*', '%');
    } else if (str.includes('/')) {
        para.innerText = str.replace('/', '%');
    } else if (str.includes('+')) {
        para.innerText = str.replace('+', '%');
    } else para.innerText=`${str}%`});
divider.addEventListener("click", (event) => {str = para.innerText;
    if (str.includes('-')) {
        para.innerText = str.replace('-', '/');
    } else if (str.includes('*')) {
        para.innerText = str.replace('*', '/');
    } else if (str.includes('+')) {
        para.innerText = str.replace('+', '/');
    } else if (str.includes('%')) {
        para.innerText = str.replace('%', '/');
    } else para.innerText=`${str}/`});
multiplier.addEventListener("click", (event) => {str = para.innerText;
    if (str.includes('-')) {
        para.innerText = str.replace('-', '*');
    } else if (str.includes('+')) {
        para.innerText = str.replace('+', '*');
    } else if (str.includes('/')) {
        para.innerText = str.replace('/', '+');
    } else if (str.includes('%')) {
        para.innerText = str.replace('%', '*');
    } else para.innerText=`${str}*`});
minus.addEventListener("click", (event) => {str = para.innerText;
    if (str.includes('+')) {
        para.innerText = str.replace('+', '-');
    } else if (str.includes('*')) {
        para.innerText = str.replace('*', '-');
    } else if (str.includes('/')) {
        para.innerText = str.replace('/', '-');
    } else if (str.includes('%')) {
        para.innerText = str.replace('%', '+');
    } else para.innerText=`${str}-`});
plus.addEventListener("click", (event) => {str = para.innerText;
    if (str.includes('-')) {
        para.innerText = str.replace('-', '+');
    } else if (str.includes('*')) {
        para.innerText = str.replace('*', '+');
    } else if (str.includes('/')) {
        para.innerText = str.replace('/', '+');
    } else if (str.includes('%')) {
        para.innerText = str.replace('%', '+');
    } else para.innerText=`${str}+`});

decimal.addEventListener("click", (event) => {str = para.innerText;
    if (str.includes('.')) {
        para.innerText = str.replace('.', '.');
    }else para.innerText=`${str}.`});

equal.addEventListener("click", (event) => {
    str = para.innerText + ' ';
    if (str.includes('+'))  {
    split = str.indexOf('+');
    num1 = str.slice(0, split);
    num1 = Number(num1);
    num2 = str.slice(split + 1, -1);
    num2 = Number(num2);
    num3 = num1 + num2;
}   else if (str.includes('-'))  {
    split = str.indexOf('-');
    num1 = str.slice(0, split);
    num2 = str.slice(split + 1, -1);
    num3 = num1 - num2;
}   else if (str.includes('*'))  {
    split = str.indexOf('*');
    num1 = str.slice(0, split);
    num2 = str.slice(split + 1, -1);
    num3 = num1 * num2;
}   else if (str === '0/0')  {
    num3 = "Fuck off!";
}   else if (str.includes('/'))  {
    split = str.indexOf('/');
    num1 = str.slice(0, split);
    num2 = str.slice(split + 1, -1);
    num3 = num1 / num2;
}   else if (str.includes('%'))  {
    split = str.indexOf('%');
    num1 = str.slice(0, split);
    num2 = str.slice(split + 1, -1);
    num3 = num1 % num2;
}
para.innerText = num3;});



function add(a, b)  {
    return a + b;
}

function subtract(a, b)  {
    return a - b;
}

function multiply(a, b)  {
    return a * b;
}

function divide(a, b)  {
    return a / b;
}

console.log(para);
/*
connect buttons to function to calculate formula
*/
//console.log(divide(0 , 0))