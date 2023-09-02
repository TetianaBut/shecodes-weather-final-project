// input now  Date
function displaytDate() {
  let nowDate = new Date();
  // console.log(nowDate);
  let hours = nowDate.getHours();
  let minutes = nowDate.getMinutes();
  let day = nowDate.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${days[day]}  ${hours}:${minutes}`;
}

// display Weather Condition
function displayWeatherCondition(response) {
  console.log(response.data);
  let displayCity = document.querySelector("h1");
  let displayDate = document.querySelector("#input-time");
  let displayDescript = document.querySelector("#description");
  let displayIcons = document.querySelector("#weather-icon");
  let displayTemp = document.querySelector("#setTempValue");
  let displayFeelsLlike = document.querySelector("#FeelsLlike");
  let displayHumidity = document.querySelector("#humidity");
  let displayWind = document.querySelector("#wind");
  displayCity.innerHTML = `${response.data.city} ${response.data.country}`;
  // displayDate.innerHTML = displaytDate(response.data.time * 1000);
  displayDate.innerHTML = displaytDate(response.data.time);
  displayDescript.innerHTML = `${response.data.condition.description}`;
  displayIcons.setAttribute("src", `${response.data.condition.icon_url}`);
  displayIcons.setAttribute("alt", `${response.data.condition.icon}`);
  currentTemp = response.data.temperature.current;
  displayTemp.innerHTML = `${Math.round(currentTemp)}`;
  currentFeelsLlike = response.data.temperature.feels_like;
  displayFeelsLlike.innerHTML = `${Math.round(currentFeelsLlike)}`;
  displayHumidity.innerHTML = ` ${response.data.temperature.humidity}`;
  currentWind = response.data.wind.speed;
  //   if (unit === "metric") {
  //     currentWind = currentWind * 3.6;
  //   }
  displayWind.innerHTML = ` ${Math.round(currentWind)}${unitWind}`;
  positionCityName = `lat=${response.data.coordinates.latitude}&lon=${response.data.coordinates.longitude}`;
  console.log(positionCityName);
}

function retrieveDataWeather(cityName) {
  let apiKey = "3a8a7709fct4f3c29afe0o4baad53aa5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?${cityName}&key=${apiKey}&units=${unit}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherCondition);
}

// search  City  Name
function searchCityName(event) {
  event.preventDefault();
  let inputCityName = document.querySelector("#city-input").value;
  //   console.log(`q=${inputCityName}`);
  retrieveDataWeather(`query=${inputCityName}`);
}

// start
let currentTemp = 0;
let currentFeelsLlike = 0;
let currentWind = 0;
let unitWind = "km/h";
let unit = "metric";
let positionCityName = "";
retrieveDataWeather("query=kyiv");
// search City Name
let cityInput = document.querySelector("#form-input");
cityInput.addEventListener("submit", searchCityName);
// favorite navigator
function nameCityKyiv(event) {
  event.preventDefault();
  retrieveDataWeather(`query=${document.querySelector("#kyiv").textContent}`);
}
function nameCityParis(event) {
  event.preventDefault();
  retrieveDataWeather(`query=${document.querySelector("#paris").textContent}`);
}
function nameCityBrno(event) {
  event.preventDefault();
  retrieveDataWeather(`query=${document.querySelector("#brno").textContent}`);
}
function nameCityNewYork(event) {
  event.preventDefault();
  retrieveDataWeather(
    `query=${document.querySelector("#newYork").textContent}`
  );
}
document.querySelector("#kyiv").addEventListener("click", nameCityKyiv);
document.querySelector("#paris").addEventListener("click", nameCityParis);
document.querySelector("#brno").addEventListener("click", nameCityBrno);
document.querySelector("#newYork").addEventListener("click", nameCityNewYork);
