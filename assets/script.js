
document.addEventListener("DOMContentLoaded", function () {
    var APIKey = "86171be4dcefe29c6968dba8880f93f9";

    //  HTML Search Button stored in searchBtn variable
    var searchBtn = document.getElementById("search-btn");
    // HTML input stored in searchInput variable
    var searchInput = document.getElementById("searchInput");

    searchBtn.addEventListener("click", searchCity);
    console.log("Hello World");

    // Five Day forcast

    function searchCity(event) {
        event.preventDefault()
        var city = searchInput.value;
        console.log(searchInput.value + " searchInput");
        getForecast(city);
        getCurrentWeather(city);

   
    }

    function getForecast(city) {
        console.log("city is " + city)
        var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=metric";
        console.log("url resolves to:")
        console.log(url)

        fetch(url)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log("Forecast API Data: ")
                var forecastData = data.list
                console.log(forecastData)
                var forecastContainer = document.getElementById("five-day-container")
                for (let i = 0; i < forecastData.length; i+=8) {
                    console.log(forecastData[i]);
                    var dailydata = forecastData[i]
                    // var dayTemp = dailydata.main.temp
                    var cardEl = document.createElement("div")
                    cardEl.classList.add("card")
                    var dateEl = document.createElement("h2")
                    dateEl.innerHTML = dailydata.dt_txt
                    cardEl.append(dateEl)
                    forecastContainer.append(cardEl)

                    var iconEl = document.createElement("img")
                    iconEl.src = "" + dailydata.weather[0].icon + ".png";
                    // console.log(dailydata.weather[0].icon)

                    var tempEl = document.createElement("p")
                    tempEl.innerHTML = "Temp: " + dailydata.main.temp + " °C"
                    cardEl.append(tempEl)
                    //
                    var windEl = document.createElement("p")
                    windEl.innerHTML = "Wind: " + dailydata.wind.speed + " MPH"
                    cardEl.append(windEl)

                    var humEl = document.createElement("p")
                    humEl.innerHTML = "Humidity: " + dailydata.main.humidity + " %"
                    cardEl.append(humEl)
                }
            });
    }

    function getCurrentWeather(city) {
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=metric";

        
        fetch(url)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                var currentForcastData = data 
                console.log(currentForcastData)
                var currentCity = data.name
                console.log(currentCity)
                var currentTemp = data.main.temp
                console.log(currentTemp)
                var currentWind = data.wind.speed
                console.log(currentWind)
                var currentHumidityData = data.main.humidity
                console.log(currentHumidityData)

                var weatherIcon = data.weather[0].icon
                console.log(weatherIcon)

                var displayIcon = '<img src="' + weatherIcon + '">';

                var currentLocation = document.getElementsByClassName("location")[0]
                currentLocation.innerHTML = currentCity

                var iconStatus = document.getElementById("icon")
                iconStatus.innerHTML = displayIcon

                var currentTemperature = document.getElementById("temperature")
                currentTemperature.innerHTML = "Temp: " + currentTemp + " °C"

                var currentWindSpeed = document.getElementById("wind")
                currentWindSpeed.innerHTML = "Wind: " + currentWind + " MPH"

                var currentHumidity = document.getElementById("humidity")
                currentHumidity.innerHTML = "Humidity: " + currentHumidityData + " %"

            });

        // fetch(url)
        //     .then(function (res) {
        //         return res.json();
        //     })
        //     .then(function (data) {
        //         console.log("Current weather API")
        //         console.log(data)
        //         const currenttemp =("Temp", data.main.temp); // Currempt temp
        //         console.log(currenttemp);
        //         console.log("Humidity", data.main.humidity);
        //         console.log("Wind", data.wind.speed);
        //         console.log("City", data.name);
        //         console.log("Date", data.dt);
        //         console.log("Icon", data.weather[0].icon);

        //         var currentLocation = document.getElementById("current-city")
        //         currentLocation.innerHTML("working!")
        //         curntLocation.append

        //         var cityName = data.name;
        //         console.log(cityName)
        //     });
            
    }
});




