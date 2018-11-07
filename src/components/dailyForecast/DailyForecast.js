import React from 'react';

import OneDay from './OneDay';

const DailyForecast = ({dailyForecast}) => {
    let dailyForecastTiles = undefined;
    if (dailyForecast !== undefined && dailyForecast.hasOwnProperty('list')) {
        dailyForecastTiles = dailyForecast.list.map((item, index) => {
            return <OneDay dayData={item} day={index} key={index}/>
        })
    } else {
        dailyForecastTiles = null
    }

    return (
        <div className="forecast-wrapper">
            {dailyForecastTiles}
            <div className="clearfix"/>
        </div>
    )
};

export default DailyForecast;
