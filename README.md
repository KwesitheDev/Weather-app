# Weather-app
Weather application, using APIs on T.O.P
## This is a project that tests my ability to fetch data from APIs
API Source : weather.visualcrossing.com/


## Description
This Weather App is a simple web application that allows users to check current weather conditions for any location. It uses the Visual Crossing Weather API to fetch real-time weather data and displays it in an easy-to-read format.

## Features
- Search for weather by location
- Display current temperature, feels-like temperature, humidity, and wind speed
- Show weather conditions with an icon
- Responsive design for various screen sizes

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Webpack (for bundling and build process)
- Babel (for backwards compatibility)
- Visual Crossing Weather API

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/KwesitheDev/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your Visual Crossing API key:
   ```
   API_KEY=your_api_key_here
   ```

4. Build the project:
   ```
   npm run build
   ```

5. To run the development server:
   ```
   npm start
   ```

## Usage
1. Open the app in your web browser.
2. Enter a location (city, country, or address) in the search box.
3. Click the "Get Weather" button or press Enter.
4. View the displayed weather information for the specified location.

## Project Structure
```
weather-app/
├── src/
│   ├── index.js
│   ├── api.js
│   ├── weather.js
│   ├── index.html
│   └── styles.css
├── webpack.config.js
├── .gitignore
├── .babelrc
├── .env
├── package.json
└── README.md
```

## Contributing
Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/KwesitheDev/weather-app/issues) if you want to contribute.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments
- [Visual Crossing Weather API](https://www.visualcrossing.com/) for providing weather data API
- [The Odin Project](https://www.theodinproject.com/) for project and guidance
