var key = '210f65b3b8c331f56a9ad2a77ea46754';
var lat = 52.52;
var lng = 13.41;
var zip = 10011;


// air quality - PM 2.5
var URL_1 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${key}`;

// wind speed
var URL_2 = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${key}`;


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



  function renderAirQuality(data) {
    var colorElement = document.querySelector('body');
  
    colorElement.style.background = `${ data.list.pm2_5 }μg/m³`;

    var saturation = '0%';
    var num = data.list[0].components.pm2_5;
    console.log(data.list[0].components.pm2_5)

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
    else  {
      saturation = '0';
    }
    colorElement.style.filter = `saturate(${ saturation })`

  }
  
  
  



function renderWeather(data) {
  setInterval(() => {
    var now = new Date();
    var currentHour = now.getHours();
  
    var containerElement = document.querySelector('html');
    var hoursElement = document.querySelector('.Hours');
    
    var colorStops = [
      { start: '#0F0F82', end: '#081012' },   //1-2
      { start: '#081012', end: '#1A4759' },   //2-3
      { start: '#1A4759', end: '#0E749D' },   //3-4
      { start: '#0E749D', end: '#62B6CC' },   //4-5
      { start: '#62B6CC', end: '#F4E0D3' },   //5-6
      { start: '#F4E0D3', end: '#E0AB9A' },   //6-7
      { start: '#E0AB9A', end: '#C7E6EF' },   //7-8
      { start: '#C7E6EF', end: '#9ED9EF' },   //8-9
      { start: '#9ED9EF', end: '#68CFFC' },   //9-10
      { start: '#68CFFC', end: '#27BFF4' },   //10-11
      { start: '#27BFF4', end: '#12A6F9' },   //11-12
      { start: '#12A6F9', end: '#008CFF' },   //12-13
      { start: '#008CFF', end: '#00AAFF' },   //13-14
      { start: '#00AAFF', end: '#19CFF9' },   //14-15
      { start: '#19CFF9', end: '#46ECF9' },   //15-16
      { start: '#46ECF9', end: '#FFEC00' },   //16-17
      { start: '#FFEC00', end: '#F9B050' },   //17-18
      { start: '#F9B050', end: '#EF8A84' },   //18-19
      { start: '#EF8A84', end: '#698EC9' },   //19-20
      { start: '#698EC9', end: '#2578CA' },   //20-21
      { start: '#2578CA', end: '#185093' },   //21-22
      { start: '#185093', end: '#053A88' },   //22-23
      { start: '#053A88', end: '#0F0F82' }    //23-24
    ];
  
    var currentColorStop = colorStops[currentHour];
  
    containerElement.style.background = `linear-gradient(to bottom, ${currentColorStop.start}, ${currentColorStop.end})`;
  
    hoursElement.innerHTML = currentHour;
  }, 1000);

  var weatherElement = document.querySelector('.Whole');
  weatherElement.style.animationDuration = `${ data.wind.speed / 3 }s` ;
  
    console.log(data);
}