/*eslint-env browser*/

//STEP 1
/* var x = prompt("Enter any number");
window.alert(Math.abs(x)); */ 
//STEP 2
/* var x = prompt("Enter any decimal number");
window.alert(Math.ceil(x)); */

//STEP 3
/* var x = prompt("Enter any decimal number");
window.alert(Math.floor(x)); */

//STEP 4

var x = prompt("Enter 5 numbers : x, x, x, x, x");
x = x.split(",");

window.alert(Math.max.apply(Math, x) || Math.min.apply(Math,x));

//STEP 5
/* var x = prompt("Enter any number");
window.alert(Math.sqrt(x)); */ 