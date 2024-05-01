var key = '210f65b3b8c331f56a9ad2a77ea46754';
var lat = 52.52;
var lng = 13.41;
var zip = 10011;


// wind speed
var URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${key}`;



  fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    renderWeather(data);
  });

  function renderWeather(data) {
    setInterval(() => {
      var now = new Date();
      var currentHour = now.getHours();
    
      var elementOne = document.getElementById('one');
      var elementTwo = document.getElementById('two');
      var elementThree = document.getElementById('three');
  
      var colorStops = [
        { start: '#01132D', end: '#081012' },   // 0-1
        { start: '#081012', end: '#1A4759' },   // 1-2
        { start: '#1A4759', end: '#0E749D' },   // 2-3
        { start: '#0E749D', end: '#62B6CC' },   // 3-4
        { start: '#62B6CC', end: '#F4E0D3' },   // 4-5
        { start: '#F4E0D3', end: '#E0AB9A' },   // 5-6
        { start: '#E0AB9A', end: '#C7E6EF' },   // 6-7
        { start: '#C7E6EF', end: '#9ED9EF' },   // 7-8
        { start: '#9ED9EF', end: '#68CFFC' },   // 8-9
        { start: '#68CFFC', end: '#27BFF4' },   // 9-10
        { start: '#27BFF4', end: '#12A6F9' },   // 10-11
        { start: '#12A6F9', end: '#008CFF' },   // 11-12
        { start: '#008CFF', end: '#00AAFF' },   // 12-13
        { start: '#00AAFF', end: '#19CFF9' },   // 13-14
        { start: '#19CFF9', end: '#46ECF9' },   // 14-15
        { start: '#46ECF9', end: '#FFEC00' },   // 15-16
        { start: '#FFEC00', end: '#F9B050' },   // 16-17
        { start: '#F9B050', end: '#EF8A84' },   // 17-18
        { start: '#EF8A84', end: '#698EC9' },   // 18-19
        { start: '#698EC9', end: '#2578CA' },   // 19-20
        { start: '#2578CA', end: '#185093' },   // 20-21
        { start: '#185093', end: '#053A88' },   // 21-22
        { start: '#053A88', end: '#0F0F82' },   // 22-23
        { start: '#0F0F82', end: '#01132D' }    // 23-24
      ];
    
      var currentColorStop = colorStops[currentHour];
    
      var textShadow = `2px 2px 6px ${currentColorStop.start}, -2px -2px 6px ${currentColorStop.end}`;
    
      elementOne.style.textShadow = textShadow;
      elementTwo.style.textShadow = textShadow;
      elementThree.style.textShadow = textShadow;
      
    }, 1000);

  
  
    var weatherElement = document.querySelector('.label');
    weatherElement.style.animationDuration = `${data.wind.speed / 3}s`;
  }
  
  
  
