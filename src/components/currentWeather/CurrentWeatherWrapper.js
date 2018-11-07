import React from 'react';

import CityNotFound from '../cityNotFound';
import CurrentWeather from './CurrentWeather';

const currentWeatherWrapper = ({weather, location}) => {
    if (weather.length > 0 && weather[0].hasOwnProperty('weather')) {
        return <CurrentWeather weather={weather[0]}/>
    }

    return <CityNotFound location={location}/>
};

export default currentWeatherWrapper;
