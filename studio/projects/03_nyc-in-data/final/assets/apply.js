var key = '210f65b3b8c331f56a9ad2a77ea46754';
var lat = 52.52;
var lng = 13.41;
var zip = 10011;


// air quality - PM 2.5
var URL_1 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${key}`;

// wind speed
var URL_2 = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${key}`;


renderTime();

fetch(URL_1)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    renderAirQuality(data);
  });

fetch(URL_2)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    renderWeather(data);
  });

function renderTime() {
  var nowDateObject = new Date();
  var earthDayDateObject = new Date('2024-04-22T00:00:00');
  var nowSeconds = nowDateObject.getTime() / 1000;
  var earthDaySeconds = earthDayDateObject.getTime() / 1000;
  var diffSeconds = earthDaySeconds - nowSeconds;
  var diffDays = Math.floor(diffSeconds / 60 / 60 / 24) * -1;
  console.log(diffDays);

  document.getElementById("day").innerHTML = diffDays;  
}
renderTime();

function renderAirQuality(data) {
  var colorElement = document.querySelector('#day');

  colorElement.style.background = `${data.list.pm2_5}μg/m³`;

  var saturation = '0%';
  var num = data.list[0].components.pm2_5;

  if (num < 12) {
    saturation = '100%';
  }
  else if (num >= 12 && num < 35.5) {
    saturation = '80%';
  }
  else if (num >= 35.5 && num < 55.5) {
    saturation = '60%';
  }
  else if (num >= 55.5 && num < 150.5) {
    saturation = '40%';
  }
  else if (num >= 150.5 && num < 250.5) {
    saturation = '20%';
  }
  else {
    saturation = '0';
  }
  colorElement.style.filter = `saturate(${saturation})`

}


function renderWeather(data) {
  setInterval(() => {
    var now = new Date();
    var currentHour = now.getHours();

    var containerElement = document.querySelector('#day');

    var colorStops = [
      { start: '#2D2D81', end: '#000000' },   // 0-1
      { start: '#000000', end: '#15545C' },   // 1-2
      { start: '#15545C', end: '#3B899B' },   // 2-3
      { start: '#3B899B', end: '#63B8CC' },   // 3-4
      { start: '#63B8CC', end: '#F8E2DB' },   // 4-5
      { start: '#F8E2DB', end: '#FABCB1' },   // 5-6
      { start: '#FABCB1', end: '#E2F3F7' },   // 6-7
      { start: '#E2F3F7', end: '#BAE8F7' },   // 7-8
      { start: '#BAE8F7', end: '#84D4F3' },   // 8-9
      { start: '#84D4F3', end: '#50C8EC' },   // 9-10
      { start: '#50C8EC', end: '#3CB2E0' },   // 10-11
      { start: '#3CB2E0', end: '#1097D3' },   // 11-12
      { start: '#1097D3', end: '#58BAEA' },   // 12-13
      { start: '#58BAEA', end: '#9FDCF0' },   // 13-14
      { start: '#9FDCF0', end: '#69CCE2' },   // 14-15
      { start: '#69CCE2', end: '#FDEA00' },   // 15-16
      { start: '#FDEA00', end: '#FCB535' },   // 16-17
      { start: '#FCB535', end: '#F37E80' },   // 17-18
      { start: '#F37E80', end: '#81C9DC' },   // 18-19
      { start: '#81C9DC', end: '#4BA4C4' },   // 19-20
      { start: '#4BA4C4', end: '#3B7DA3' },   // 20-21
      { start: '#3B7DA3', end: '#0F60AA' },   // 21-22
      { start: '#0F60AA', end: '#334BA0' },   // 22-23
      { start: '#334BA0', end: '#2D2D81' }   // 23-24
    ];

    var currentColorStop = colorStops[currentHour];

    containerElement.style.background = `linear-gradient(to bottom, ${currentColorStop.start}, ${currentColorStop.end})`;

    // Additional styles to achieve text gradient effect
    containerElement.style.webkitBackgroundClip = 'text';
    containerElement.style.webkitTextFillColor = 'transparent';
    containerElement.style.backgroundClip = 'text';
    containerElement.style.color = 'transparent';

  }, 1000);

  var weatherElement = document.querySelector('.label');
  weatherElement.style.animationDuration = `${data.wind.speed / 3}s`;
}