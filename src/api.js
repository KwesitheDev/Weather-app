// src/api.js
const API_KEY = process.env.API_KEY;
const API_BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

async function getWeatherData(location) {
    try {
        const response = await fetch(`${API_BASE_URL}/${location}?unitGroup=metric&key=${API_KEY}`);
        if (!response.ok) throw new Error('Weather data not found');
        return await response.json();
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

export { getWeatherData };