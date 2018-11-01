import React from 'react';

const DailyForecast = ({dailyForecast}) => {

    if (dailyForecast !== undefined) {
        console.log(dailyForecast);
        dailyForecast.list.map(day => {
            console.log(day.temp.day)
        });
        let dailyArray = dailyForecast.list.map((day, index) => {
            // return ( console.log(`day ${index}`, day.temp.day) )
            return ( <li>Dzień {index + 1}: {day.temp.day} °C</li> )
        });
        return ( <div>{dailyArray}</div> )
    }

    return (
        <div>placeholder for daily forecast</div>
    )
};

export default DailyForecast;