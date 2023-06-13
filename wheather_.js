const apiKey = "ffb305c76a0e48bf61b8c623c0e62e55";
// const apiUrl = "https://home.openweathermap.org/api_keys";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
console.log("hi");
function getForecast() {
  const city = document.getElementById("city").value;
  const url = apiUrl + city + "&appid=" + apiKey;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const forecast = document.getElementById("forecast");
      forecast.innerHTML = "";

      for (let i = 0; i < data.list.length; i += 8) {
        const date = new Date(data.list[i].dt * 1000);
        const day = date.toLocaleDateString(undefined, {weekday: 'long'});
        const temp = Math.round(data.list[i].main.temp - 273.15) + "°C";
        const icon = "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";

        const div = document.createElement("div");
        div.classList.add("day");
        div.innerHTML = `
          <div>${day}</div>
          <img class="icon" src="${icon}">
          <div class="temp">${temp}</div>
        `;
        forecast.appendChild(div);
      }
    })
    .catch(error => {
      console.error(error);
    });
}
