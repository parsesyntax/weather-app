//challenge 1
function searchButton(event) {
  event.preventDefault();
  let city = document.querySelector("#cityInput").value;
  searchCity(city);
}

function searchCity(city) {
  let apiKey = "2b6fdad0cbd018949c50c70f72250726";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(showWeather);
}

let search = document.querySelector(".submitForm");
search.addEventListener("submit", searchButton);

function showWeather(response) {
  let title = document.querySelector(".card-title");
  title.innerHTML = response.data.name;

  let inputCity = document.querySelector("#temp");
  let temperature = Math.round(response.data.main.temp);

  inputCity.innerHTML = `${temperature}°`;
}

//challenge 2

function searchButtoLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPosition);
}

function getPosition(position) {
  let apiKeyLocation = "b2d9fa1f2b35557e4615dd5fab218834";
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let unit = "metric";
  let apiUrlLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKeyLocation}&units=${unit}`;

  axios.get(apiUrlLocation).then(showWeather);
}

let currentLocation = document.querySelector(".current-location");
currentLocation.addEventListener("click", searchButtoLocation);
