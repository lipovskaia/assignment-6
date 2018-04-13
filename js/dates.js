/*eslint-env browser*/

//STEP 1
/* function daysInMonth() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
}
window.alert("This month is " + daysInMonth() + " days."); */
//STEP 2

/*  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var now = new Date();
window.alert("The month is " + monthNames[now.getMonth()]); */
 
//STEP 3
/* var today = new Date();
if(today.getDay() == 6 || today.getDay() == 0){
    window.alert("Weekend");
}else{
    window.alert("not a weekwend");
} */
//STEP 4
/* var dayOfWeek = ["Sanday", "Monday", "Tuesday", "Wednesday", "Thirthday", "Friday",
  "Saturday"
];

var now = new Date();
window.alert("Yesterday was " + dayOfWeek[now.getDay()-1]); */


//STEP 5
var dayOfWeek = ["Sanday", "Monday", "Tuesday", "Wednesday", "Thirthday", "Friday",
  "Saturday"
];

var now = new Date();
window.alert("Today is " + dayOfWeek[now.getDay()].charAt(0)); 
