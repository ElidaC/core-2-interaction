var dateObject = new Date()


var URL = `https://open-meteo.com/en/docs/air-quality-api#hourly=pm2_5,us_aqi_pm2_5&timezone=America%2FNew_York&forecast_days=1`;

fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        render(data);
    })

function render(data) {
    var dateObject = new Date();
    var hour = dateObject.getHours();


}