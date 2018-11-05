import React from 'react';

const WeekDay = ({dayTimestamp}) => {
    const date = new Date(dayTimestamp * 1000);

    const daysArray = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    const day = daysArray[date.getDay()];

    return (
        <div className="pull-left">{day}</div>
    )
};

export default WeekDay;
