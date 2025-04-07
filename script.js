function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "d92fcc34c4b01f6c3c4cbd9705969e10";  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weather-info").innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                document.getElementById("weather-info").innerHTML = `<p>City not found.</p>`;
            }
        })
        .catch(error => console.error("Error fetching data:", error));
}
