import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

class ForecastWeather extends Component {
    state = {
        config: null
    };


    componentDidMount() {
        this.updateHighChartConfig();
    }


    componentDidUpdate(prevProps) {
        if (Object.keys(this.props.forecast).length !== 0) {
            if (prevProps.forecast === undefined) {
                this.updateHighChartConfig();
            } else if (prevProps.forecast.city.name !== this.props.forecast.city.name) {
                this.updateHighChartConfig();
            }
        }
    }

    updateHighChartConfig = () => {
        let categories = [],
            temp = [];

        const {forecast} = this.props;

        forecast.list.map(item => {
            let splitDt_txt = (item.dt_txt).split(' '),
                year = splitDt_txt[0].split('2018-'),
                hour = splitDt_txt[1].split(':');

            temp.push(item.main.temp);
            categories.push(year[1] + ', ' + hour[0] + 'h');
            return true;
        });

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

        this.setState({
            config
        })
    };

    render() {
        return (
            <div className="forecast-weather">
                {this.state.config !== null ? (
                    <ReactHighcharts config={this.state.config}/>
                ) : (
                    <div>brak configu</div>
                )}
            </div>
        )
    }
}

export default ForecastWeather;
