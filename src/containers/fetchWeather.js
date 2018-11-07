import {Component} from 'react'
import {connect} from 'react-redux';

class FetchWeather extends Component {

    fetchWeather(city = this.props.location, weatherForecast) {
        fetch(`http://api.openweathermap.org/data/2.5/${weatherForecast}?q=${city}&units=metric&appid=${this.props.appid}`)
            .then(response => response.json())
            .then(data => {
                switch (weatherForecast) {
                    case 'weather':
                        this.props.fetchWeather(data);
                        return;

                    case 'forecast':
                        this.props.fetchForecast(data);
                        return;

                    default:
                        this.props.fetchWeather(data);
                        return;
                }
            })
    }

    fetchWeatherDaily(city = this.props.location) {
        fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&appid=${this.props.appid}&cnt=6`)
            .then(response => response.json())
            .then(data => this.props.fetchDailyForecast(data))
    }

    componentDidMount() {
        this.fetchWeatherDaily();
        if (this.props.location !== '') {
            this.fetchWeather(this.props.location, 'weather');
            this.fetchWeather(this.props.location, 'forecast');
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            this.fetchWeather(this.props.location, 'weather');
            this.fetchWeather(this.props.location, 'forecast');
            this.fetchWeatherDaily();
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.location,
        appid: state.appid
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeather: (weather) => {
            dispatch({type: 'FETCH_WEATHER', weather: weather})
        },
        fetchForecast: (forecast) => {
            dispatch({type: 'FETCH_FORECAST', forecast: forecast})
        },
        fetchDailyForecast: (dailyForecast) => {
            dispatch({type: 'FETCH_DAILY_FORECAST', dailyForecast: dailyForecast})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchWeather);
