const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const button = document.getElementById('getWeather');
const cityInput = document.getElementById('city');
const weatherInfo = document.getElementById('weatherInfo');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');

button.addEventListener('click', () => {
  const city = cityInput.value;

  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === '404') {
      alert('City not found.');
      weatherInfo.style.display = 'none';
    } else {
      cityName.textContent = `${data.name}, ${data.sys.country}`;
      temperature.textContent = `Temperature: ${data.main.temp} °C`;
      description.textContent = `Description: ${data.weather[0].description}`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;

      weatherInfo.style.display = 'block';
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Something went wrong. Please try again later.');
  }
}
