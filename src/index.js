
import { getWeatherData } from './api';
import { processWeatherData, displayWeatherInfo } from './weather';
import './styles.css';

const weatherForm = document.getElementById('weather-form');
const locationInput = document.getElementById('location-input');
const loading = document.getElementById('loading');
const weatherInfo = document.getElementById('weather-info');

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const location = locationInput.value.trim();
    if (!location) return;

    weatherInfo.classList.add('hidden');
    loading.classList.remove('hidden');

    try {
        const weatherData = await getWeatherData(location);
        const processedData = processWeatherData(weatherData);
        displayWeatherInfo(processedData);
    } catch (error) {
        alert('Error fetching weather data. Please try again.');
    } finally {
        loading.classList.add('hidden');
    }
});