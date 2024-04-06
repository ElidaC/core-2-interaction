var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var monthElement = document.querySelector('.month');
console.log(monthElement);

setInterval(() => {
    
var dateObject = new Date();
var month = monthList[dateObject.getMonth()];
console.log('month:', month);

monthElement.innerHTML = month;

}, 1000);
