import React from 'react';
import WeatherDetails from './weatherDetails';

const currentWeather = ({weather}) => {
    let weatherDetails;

    if (weather && weather.main) {
        weatherDetails = <WeatherDetails name={weather.name} main={weather.main} weather={weather.weather[0]}/>;
    }

    return (
        <div className="current-weather">
            {weatherDetails}
        </div>
    )
};

export default currentWeather;