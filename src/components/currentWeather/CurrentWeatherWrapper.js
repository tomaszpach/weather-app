import React from 'react';

import Loader from '../loader/loader';
import CurrentWeather from './CurrentWeather';

const currentWeatherWrapper = ({weather}) => {
    if (weather.length > 0 && weather[0].hasOwnProperty('weather')) {
        return <CurrentWeather weather={weather[0]}/>
    }

    return <Loader/>

};

export default currentWeatherWrapper;