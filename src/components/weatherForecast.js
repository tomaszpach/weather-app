import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

class WeatherForecast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            forecast: {}
        }
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.forecast.city && !(this.state.forecast.hasOwnProperty('city'))) {
            this.setState({
                forecast: nextProps.forecast
            });
            return true;
        }

        return false;
    }

    componentWillUnmount() {
        this.setState({
            forecast: {}
        });
    }

    render() {
        let categories = [],
            temp = [];

        if (this.state.forecast && this.state.forecast.hasOwnProperty('list')) {
            this.state.forecast.list.map(item => {
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
    }
}

export default WeatherForecast;