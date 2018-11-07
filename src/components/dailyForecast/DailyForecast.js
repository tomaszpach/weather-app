import React from 'react';

import Loader from '../loader/loader';
import OneDay from './OneDay';

const DailyForecast = ({dailyForecast}) => {
    let days = undefined;
    if (dailyForecast !== undefined && dailyForecast.hasOwnProperty('list')) {
        days = dailyForecast.list.map((item, index) => {
            return <OneDay dayData={item} day={index} key={index}/>
        })
    } else {
        days = null
    }

    return (
        <div className="forecast-wrapper">
            {days}
            <div className="clearfix" />
        </div>
    )
};

export default DailyForecast;
