import React from 'react';
import sun from "../../images/climacons/SVG/Sun.svg";
import rain from "../../images/climacons/SVG/Cloud-Rain.svg";

const WeatherIcon = ({icon}) => {

    let weatherIcon = <img src={sun} />;

    switch (icon) {
        case 'Rain':
            weatherIcon = <img src={'.' + rain} />;
            break;

        case 'Clear':
            weatherIcon = <img src={'.' + sun} />;
            break;

        default:
            weatherIcon = <img src={sun} />;
    }

    return (
        <div className="big-icon">
            {weatherIcon}
        </div>
    )
};

export default WeatherIcon;
