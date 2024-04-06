// Month and Day Lists
// -----------------------------------------------------------
var monthList = ['jan', 'feb', 'march', 'april', 'may', 'jun', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
var dayList = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

//The Date Object (asking laptop for the time)
//------------------------------------------------------------
var dateObject = new Date();
console.log('dateObject:', dateObject);

// Hours
// -----------------------------------------------------------
var hours = dateObject.getHours();
console.log('hours:', hours);

// Minutes
// -----------------------------------------------------------
var minutes = dateObject.getMinutes();
console.log('minutes:', minutes);

// Seconds
// -----------------------------------------------------------
var seconds = dateObject.getSeconds();
console.log('seconds:', seconds);


// Period
// -----------------------------------------------------------
// if (hours <= 12) {
//     var period = 'am'
// } else {
//     var period = 'pm'
// }

var period = (hours <= 12)? 'am' : 'pm'; //ternery operator
console.log('period:', period);


// Year
// -----------------------------------------------------------
var year = dateObject.getFullYear();
console.log('year:', year);




// Month
// -----------------------------------------------------------
var month = dateObject.getMonth();
console.log('month:', month);
// computer counts from 0, so 3 means April
var month = monthList[3];
console.log('month:', month);

var month = monthList[dateObject.getMonth()];
console.log('month:', month);


// Day
// -----------------------------------------------------------
var day = dayList[dateObject.getDay()];
console.log('day:', day);