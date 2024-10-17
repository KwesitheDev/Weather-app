
function processWeatherData(data) {
    const currentConditions = data.currentConditions;
    return {
        location: data.address,
        temperature: Math.round(currentConditions.temp),
        feelsLike: Math.round(currentConditions.feelslike),
        description: currentConditions.conditions,
        icon: currentConditions.icon,
        humidity: currentConditions.humidity,
        windSpeed: currentConditions.windspeed,
        datetime: new Date(currentConditions.datetime).toLocaleString()
    };
}

function displayWeatherInfo(weatherData) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>${weatherData.location}</h2>
        <p>Date/Time: ${weatherData.datetime}</p>
        <img src="https://www.weatherbit.io/static/img/icons/${weatherData.icon}.png" alt="${weatherData.description}">
        <p>Temperature: ${weatherData.temperature}°C</p>
        <p>Feels like: ${weatherData.feelsLike}°C</p>
        <p>Conditions: ${weatherData.description}</p>
        <p>Humidity: ${weatherData.humidity}%</p>
        <p>Wind speed: ${weatherData.windSpeed} km/h</p>
    `;
    weatherInfo.classList.remove('hidden');
}

export { processWeatherData, displayWeatherInfo };