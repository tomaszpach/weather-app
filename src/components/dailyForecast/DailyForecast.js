import React from 'react';

import OneDay from './OneDay';

const DailyForecast = ({dailyForecast}) => {
    let days = undefined;
    if (dailyForecast !== undefined) {
        days = dailyForecast.list.map((item, index) => {
            return <OneDay dayData={item} day={index} key={index}/>
        })
    }

    return (
        days !== undefined ? days : <div>loading daily weather</div>
    )
};

export default DailyForecast;
