import React from 'react';

import OneDay from './OneDay';

const DailyForecast = ({dailyForecast}) => {

    // if (dailyForecast !== undefined) {
    //     console.log(dailyForecast);
    //     dailyForecast.list.map(day => {
    //         console.log(day.temp.day)
    //     });
    //     let dailyArray = dailyForecast.list.map((day, index) => {
    //         // return ( console.log(`day ${index}`, day.temp.day) )
    //         return ( <li>Dzień {index + 1}: {day.temp.day} °C</li> )
    //     });
    //     return ( <div>{dailyArray}</div> )
    // }

    let days = undefined;
    if (dailyForecast !== undefined) {
        days = dailyForecast.list.map((item, index) => {
            return <OneDay dayData={item} index={index} key={index}/>
        })
    }


    return (
        days !== undefined ? days : <div>loading daily weather</div>
    )
};

export default DailyForecast;
