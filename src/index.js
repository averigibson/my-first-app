function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let dayIndex = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[dayIndex];

    return `${day} ${hours}:${minutes}`;
}

function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
        response.data.main.temp
    );
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
        response.data.wind.speed
    );
    document.querySelector("#description").innerHTML =
        response.data.weather[0].main;
}

function search(event) {
    event.preventDefault();
    let apiKey = "06302d11959f00f29b052ca84aa10395";
    let city = document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

let dateElement = document.querySelector("#current-date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);


let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function showTemperature(response) {
    console.log(response.data.main.temp);
    let temperature = Math.round(response.data.main.temp);
    let city = response.data.name;
    let message = `It is ${temperature} degrees in ${city}`;
    let h1 = document.querySelector("h1");
    h1.innerHTML = message;
    console.log(h1);
    console.log(message);
}