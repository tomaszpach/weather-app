import React from 'react';

const NextDay = ({day}) => {
    let nextDayText;
    if (day === 0) {
        nextDayText = 'Dziś'
    } else if (day === 1) {
        nextDayText = 'Jutro'
    } else if (day === 2) {
        nextDayText = 'Pojutrze'
    } else {
        nextDayText = `Za ${day + 1} dni`
    }

    return (
        <div className="tiles-title">{nextDayText}</div>
    )
};

export default NextDay;
