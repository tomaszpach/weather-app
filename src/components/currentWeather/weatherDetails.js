import React from 'react';

const weatherDetails = ({name, main, weather, wind}) => {
    let iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`;
    const arrowStyle = {
        transform: `rotate(${wind.deg}deg)`
    };
    return (
        <div>
            <h2 className="name">{name}</h2>
            <p className="description">{weather.description}</p>

            <div className="details">
                <div className="icon-temperature">
                    <img src={iconUrl} alt={weather.main}/>
                    <span className="temperature">{main.temp} &#8451;</span>
                </div>
                <div className="humidity-pressure">
                    <div>Humidity: {main.humidity}%</div>
                    <div>Pressure: {main.pressure} hPa</div>
                </div>

                <div className="wind">
                    <div>Wind: {wind.speed} km/h</div>
                    {wind.gust ? <div>Gust: {wind.gust} km/h</div> : null}
                </div>
                <div className="wind-direction">
                    <i className="fas fa-arrow-up" style={arrowStyle}/>
                </div>
            </div>

            // todo remove unused parts
            {/*<div>*/}
            {/*<div>temp_max: {main.temp_max} &#8451;</div>*/}
            {/*<div>temp_min: {main.temp_min} &#8451;</div>*/}

            {/*</div>*/}

        </div>
    )
};

export default weatherDetails;