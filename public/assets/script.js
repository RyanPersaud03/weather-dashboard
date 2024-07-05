
document.addEventListener("DOMContentLoaded", function () {
    // The rest of your code...

    function getForecast(city) {
        var url = "/forecast?city=" + city;
        fetch(url)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log("Forecast API Data: ");
                var forecastData = data.list;
                console.log(forecastData);
                var forecastContainer = document.getElementById("five-day-container");
                forecastContainer.innerHTML = ""; // Clear previous results
                for (let i = 0; i < forecastData.length; i += 8) {
                    var dailydata = forecastData[i];
                    var cardEl = document.createElement("div");
                    cardEl.classList.add("card");
                    var dateEl = document.createElement("h2");
                    dateEl.innerHTML = dailydata.dt_txt;
                    cardEl.append(dateEl);

                    var iconEl = document.createElement("img");
                    iconEl.src = `https://openweathermap.org/img/wn/${dailydata.weather[0].icon}.png`;

                    var tempEl = document.createElement("p");
                    tempEl.innerHTML = "Temp: " + dailydata.main.temp + " °C";
                    cardEl.append(tempEl);

                    var windEl = document.createElement("p");
                    windEl.innerHTML = "Wind: " + dailydata.wind.speed + " MPH";
                    cardEl.append(windEl);

                    var humEl = document.createElement("p");
                    humEl.innerHTML = "Humidity: " + dailydata.main.humidity + " %";
                    cardEl.append(humEl);

                    forecastContainer.append(cardEl);
                }
            });
    }

    function getCurrentWeather(city) {
        var url = "/weather?city=" + city;

        fetch(url)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log(data);
                var currentCity = data.name;
                var currentTemp = data.main.temp;
                var currentWind = data.wind.speed;
                var currentHumidityData = data.main.humidity;
                var weatherIcon = data.weather[0].icon;

                var displayIcon = `<img src="https://openweathermap.org/img/wn/${weatherIcon}.png">`;

                var currentLocation = document.getElementsByClassName("location")[0];
                currentLocation.innerHTML = currentCity;

                var iconStatus = document.getElementById("icon");
                iconStatus.innerHTML = displayIcon;

                var currentTemperature = document.getElementById("temperature");
                currentTemperature.innerHTML = "Temp: " + currentTemp + " °C";

                var currentWindSpeed = document.getElementById("wind");
                currentWindSpeed.innerHTML = "Wind: " + currentWind + " MPH";

                var currentHumidity = document.getElementById("humidity");
                currentHumidity.innerHTML = "Humidity: " + currentHumidityData + " %";
            });
    }

    // The rest of your code...
});
