import React from 'react';

const averagePressure = ({forecast}) => {
    let pressureList = [],
        summary = 0,
        averagePressure = 'Checking...';

    if (forecast && forecast.hasOwnProperty('list')) {
        forecast.list.forEach(item => {
            pressureList.push(item.main.pressure);
        });

        pressureList.forEach(item => {
            summary += item;
        });

        if ((summary > 0) && (pressureList.length > 0)) {
            averagePressure = (summary / pressureList.length).toFixed() + ' hPa';
        } else {
            averagePressure = 'No data yet'
        }
    }

    return (
        <div className="average-pressure">Week average pressure: {averagePressure}</div>
    )
};

export default averagePressure;
