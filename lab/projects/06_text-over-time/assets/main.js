var key = '210f65b3b8c331f56a9ad2a77ea46754';
var zip = 10011;

var URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${key}`;

fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    render(data);
  });

function render(data) {
  setInterval(() => {
    var now = new Date();
    var currentHour = now.getHours();
  
    var containerElement = document.querySelector('.Container');
    var hoursElement = document.querySelector('.Hours');
    
    var colorStops = [
      { start: '#081012', end: '#1A4759' },   // 0:00 - 1:00
      { start: '#1A4759', end: '#0E749D' },   // 1:00 - 2:00
      { start: '#0E749D', end: '#62B6CC' },   // 2:00 - 3:00
      { start: '#62B6CC', end: '#F4E0D3' },   // 3:00 - 4:00
      { start: '#F4E0D3', end: '#E0AB9A' },   // 4:00 - 5:00
      { start: '#E0AB9A', end: '#C7E6EF' },   // 5:00 - 6:00
      { start: '#C7E6EF', end: '#9ED9EF' },   // 6:00 - 7:00
      { start: '#9ED9EF', end: '#68CFFC' },   // 7:00 - 8:00
      { start: '#68CFFC', end: '#27BFF4' },   // 8:00 - 9:00
      { start: '#27BFF4', end: '#12A6F9' },   // 9:00 - 10:00
      { start: '#12A6F9', end: '#008CFF' },   // 10:00 - 11:00
      { start: '#008CFF', end: '#00AAFF' },   // 11:00 - 12:00
      { start: '#00AAFF', end: '#19CFF9' },   // 12:00 - 13:00
      { start: '#19CFF9', end: '#46ECF9' },   // 13:00 - 14:00
      { start: '#46ECF9', end: '#FFEC00' },   // 14:00 - 15:00
      { start: '#FFEC00', end: '#F9B050' },   // 15:00 - 16:00
      { start: '#F9B050', end: '#EF8A84' },   // 16:00 - 17:00
      { start: '#EF8A84', end: '#698EC9' },   // 17:00 - 18:00
      { start: '#698EC9', end: '#2578CA' },   // 18:00 - 19:00
      { start: '#2578CA', end: '#185093' },   // 19:00 - 20:00
      { start: '#185093', end: '#053A88' },   // 20:00 - 21:00
      { start: '#053A88', end: '#0F0F82' },   // 21:00 - 22:00
      { start: '#0F0F82', end: '#081012' }    // 22:00 - 23:00
    ];
  
    var currentColorStop = colorStops[currentHour];
  
    containerElement.style.background = `linear-gradient(to bottom, ${currentColorStop.start}, ${currentColorStop.end})`;
  
    hoursElement.innerHTML = currentHour;
  }, 1000);

  var weatherElement = document.querySelector('.Weather');
  weatherElement.style.animationDuration = `${ data.wind.speed / 30 }s` ;
  
    console.log(data);
}
