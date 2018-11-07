import React from 'react';
import NextDay from './NextDay';
import WeatherIcon from './WeatherIcon';
import WeekDay from './WeekDay';
import DayTemperature from './DayTemperature';

class OneDay extends React.Component {
    render() {
        const {dayData, day} = this.props;

        return (
            <div className="col-md-4 col-sm-4 tile-wrapper">
                <div className="tiles red weather-widget">
                    <div className="tiles-body">
                        <NextDay dayTimestamp={dayData.dt} day={day}/>
                        <div className="heading">
                            <WeekDay dayTimestamp={dayData.dt}/>
                            <WeatherIcon weather={dayData.weather[0]}/>
                            <DayTemperature temperature={dayData.temp}/>
                            <div className="clearfix"/>
                        </div>
                    </div>
                    <div className="tile-footer">
                        <div className="pull-left">
                            <div>Wiatr: {dayData.speed} m/s</div>
                            <div>Zachmurzenie: {dayData.clouds}%</div>
                        </div>
                        <div className="pull-right">
                            <canvas id="rain" width="32" height="32"></canvas>
                            {day <= 3 ? <span
                                className="text-white small-text-description">Wilgotność: {dayData.humidity}%</span> : null}
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OneDay;
