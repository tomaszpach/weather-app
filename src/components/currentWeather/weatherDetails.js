import React from 'react';

const weatherDetails = ({name, main, weather, wind}) => {
    const iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`;

    return (
        <div>
            <div className="row">
                <div className="col-md-12 tile-wrapper">
                    <div className="tiles red weather-widget">
                        <div className="tiles-body">
                            <div className="tiles-title">Teraz - {weather.description}</div>
                            <div className="heading">
                                <div className="pull-left">{name}</div>
                                <img src={iconUrl} alt="sky is clear"
                                     className="pull-right" />
                                <div className="pull-right">{(main.temp).toFixed()}°C</div>
                                <div className="clearfix"></div></div>
                        </div>
                        <div className="tile-footer">
                            <div className="pull-left">
                                <div>Wiatr: {wind.speed} m/s</div>
                                <div>Zachmurzenie: 0%</div>
                            </div>
                            <div className="pull-right">
                                <div>Wilgotność: {main.humidity}%</div>
                                <div>Ciśnienie: {main.pressure} hPa</div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
};

export default weatherDetails;
