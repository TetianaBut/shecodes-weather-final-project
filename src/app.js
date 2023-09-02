// set Unit Temperature
function displayWeatherCondition(response) {
  console.log(response.data);
}

function retrieveDataWeather(cityName) {
  let apiKey = "3a8a7709fct4f3c29afe0o4baad53aa5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?${cityName}&key=${apiKey}&units=${unit}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherCondition);
}

// start
let currentTemp = 0;
let currentWind = 0;
let unitWind = "km/h";
let unit = "metric";
let positionCityName = "";
retrieveDataWeather("query=kyiv");
