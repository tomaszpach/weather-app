import React from 'react';
import WeatherIcon from './WeatherIcon';

class OneDay extends React.Component {

    render() {
        const {dayData, index} = this.props;
        const date = new Date(dayData.dt * 1000);

        // console.log(date.getDay());

        const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = daysArray[date.getDay()];

        return (
            <div className="col-md-4 col-sm-4 no-padding tile-wrapper">
                <div className="tiles red weather-widget">
                    <div className="tiles-body">

                        <div className="tiles-title">Pogoda na dzień {index + 1}</div>
                        <div className="heading">
                            <div className="pull-left">{day}</div>
                            <div className="pull-right">{dayData.temp.day} °C</div>
                            <div className="clearfix"></div>
                        </div>
                        <WeatherIcon icon={dayData.weather[0].main} />
                        <div className="clearfix"></div>
                    </div>
                    <div className="tile-footer">
                        <div className="pull-left">
                            <canvas id="wind" width="32" height="32"></canvas>
                            <span className="text-white small-text-description">Windy</span></div>
                        <div className="pull-right">
                            <canvas id="rain" width="32" height="32"></canvas>
                            <span className="text-white small-text-description">Humidity</span></div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OneDay;
