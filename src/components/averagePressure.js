import React from 'react';

const averagePressure = ({forecast}) => {
    let pressureList = [],
        summary = 0,
        averagePressure = 0;

    if (forecast && forecast.list) {
        forecast.list.map(item => {
            pressureList.push(item.main.pressure);
        });

        pressureList.map(item => {
            summary += item;
        });

        averagePressure = (summary / pressureList.length).toFixed();

        console.log(averagePressure);
    }

    return (
        <div className="average-pressure">Week average pressure: {averagePressure} hPa</div>
    )
};

export default averagePressure;