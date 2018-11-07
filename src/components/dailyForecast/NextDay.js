import React from 'react';

const NextDay = ({day}) => {
    let nextDayText;
    switch (day) {
        case 0:
            nextDayText = 'Dziś';
            break;
        case 1:
            nextDayText = 'Jutro';
            break;
        case 2:
            nextDayText = 'Pojutrze';
            break;

        default:
            nextDayText = `Za ${day} dni`
    }

    return (
        <div className="tiles-title">{nextDayText}</div>
    )
};

export default NextDay;
