import React from 'react';
import ReactHighcharts from 'react-highcharts';

const weatherForecast = ({forecast}) => {
    let categories = [],
        temp = [];

    if (forecast && forecast.list) {
        forecast.list.map(item => {
            temp.push(item.main.temp);
            return categories.push(item.dt_txt);
        });
    }

    let config = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Every 3h temperature'
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
        }]
    };

    return (
        <div className="forecast-weather">
            <ReactHighcharts config={config}/>
        </div>
    )
};

export default weatherForecast;