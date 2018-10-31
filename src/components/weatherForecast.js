import React from 'react';
import ReactHighcharts from 'react-highcharts';

const WeatherForecast = ({forecast}) => {
    let categories = [],
        temp = [];

    if (forecast && forecast.hasOwnProperty('list')) {
        forecast.list.map(item => {
            let splitDt_txt = (item.dt_txt).split(' '),
                year = splitDt_txt[0].split('2018-'),
                hour = splitDt_txt[1].split(':');

            temp.push(item.main.temp);
            categories.push(year[1] + ', ' + hour[0] + 'h');
            return true;
        });
    }

    let config = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Every 3h temperature',
            style: {
                color: '#808080'
            },
        },
        xAxis: {
            categories: categories
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        series: [{
            name: 'Temperature',
            data: temp
        }],
        plotOptions: {
            series: {
                color: '#808080'
            }
        },
    };

    return (
        <div className="forecast-weather">
            <ReactHighcharts config={config}/>
        </div>
    )
};

export default WeatherForecast;
