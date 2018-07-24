import React from 'react';

import WeatherDetails from './weatherDetails';

// Get data (props) from searchBar.js input
// Show temperature, pressure, wind, maybe some kind of icon
const currentWeather = ({weather}) => {
    // if (weather !== undefined) {
    //     console.log('weather.main', weather.main);
    //
    //     if (weather.main) {
    //         console.log('weather.main.temp', weather.main.temp)
    //     }
    // }

    let weatherDetails;

    // todo check if there is city

    if (weather && weather.main) {
        weatherDetails = (
            <div>

                <WeatherDetails name={weather.name} main={weather.main} weather={weather.weather[0]} />
            </div>
        );
    }

    return (
        <div className="current-weather">
            {weatherDetails}
        </div>
    )

};

export default currentWeather;