import React from 'react';
import ReactHighcharts from 'react-highcharts';


const weatherForecast = ({forecast}) => {
    let categories = [],
        temp = [];

    // todo chart data below should be shorter
    if (forecast && forecast.hasOwnProperty('list')) {
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

export default weatherForecast;