import React from 'react';

const weatherDetails = ({name, main, weather}) => {
    console.log('icon', weather);
    let iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`;
    return (
        <div>
            <h2 className="name">{name}</h2>
            <p className="description">{weather.description}</p>

            <div className="icon-temperature">
                <img src={iconUrl} alt={weather.main}/>
                <span className="temperature">{main.temp} &#8451;</span>
            </div>

            <div>
                <div>temp_max: {main.temp_max} &#8451;</div>
                <div>temp_min: {main.temp_min} &#8451;</div>
                <div>humidity: {main.humidity} </div>
                <div>pressure: {main.pressure}</div>
            </div>

        </div>
    )
};

export default weatherDetails;