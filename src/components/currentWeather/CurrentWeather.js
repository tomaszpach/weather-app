import React from 'react';
import WeatherDetails from './weatherDetails';

const currentWeather = ({weather}) => {
    let weatherDetails;

    if (weather && weather.hasOwnProperty('main')) {
        weatherDetails =
            <WeatherDetails name={weather.name} main={weather.main} weather={weather.weather[0]} wind={weather.wind}/>;
    }

    return (
        <div className="current-weather">
            {weatherDetails}
        </div>
    )
};

export default currentWeather;
