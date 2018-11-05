import React from 'react';

const WeatherIcon = ({weather}) => {
    const {icon, description} = weather;

    return <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} className="pull-right"/>
};

export default WeatherIcon;
