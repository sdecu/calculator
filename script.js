let one = document.querySelector(".one");
let two = document.querySelector("two");
let three = document.querySelector("three");
let four = document.querySelector("four");
let five = document.querySelector("five");
let six = document.querySelector("six");
let seven = document.querySelector("seven");
let eight = document.querySelector("eight");
let nine = document.querySelector("nine");
let zero = document.querySelector("zero");
let doubleZero = document.querySelector("doubleZero");
let ac = document.querySelector("ac");
let erase = document.querySelector("erase");
let remainder = document.querySelector("remainder");
let divider = document.querySelector("divide");
let multiplier = document.querySelector("multiply");
let minus = document.querySelector("minus");
let plus = document.querySelector("plus");
let equal = document.querySelector("equal");
let decimal = document.querySelector("decimal");
let para = document.querySelector("div p");

one.addEventListener("click", (event) => {para.innerText="1"});



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
/*connect buttons to display to
connect buttons to function to calculate formula
*/
//console.log(divide(0 , 0))