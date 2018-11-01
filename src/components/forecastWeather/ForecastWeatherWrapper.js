import React from 'react';

import Loader from '../loader/loader';
import ForecastWeather from './ForecastWeather';
import AveragePressure from './AveragePressure';


const forecastWeatherWrapper = ({forecast}) => {
    if (forecast.length > 0 && forecast[0].hasOwnProperty('list')) {
        return (
            <div>
                <AveragePressure forecast={forecast[0]}/>
                <ForecastWeather forecast={forecast[0]}/>
            </div>
        )
    }

    return <Loader/>

};

export default forecastWeatherWrapper;