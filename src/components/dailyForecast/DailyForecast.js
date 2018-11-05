import React from 'react';

import Loader from '../loader/loader';
import OneDay from './OneDay';

const DailyForecast = ({dailyForecast}) => {
    let days = undefined;
    if (dailyForecast !== undefined) {
        days = dailyForecast.list.map((item, index) => {
            return <OneDay dayData={item} day={index} key={index}/>
        })
    } else {
        days = <Loader/>
    }

    return days
};

export default DailyForecast;
