import React from 'react';

const DayTemperature = ({temperature}) => {
    const fixedTempDay = temperature.day.toFixed();
    return (
        <div className="pull-right">{fixedTempDay}°C</div>
    )
};

export default DayTemperature;
