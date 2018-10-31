import {Component} from 'react'
import { connect } from 'react-redux';

class FetchWeather extends Component {
    state = {
        value: 'Krakow',
        weather: {},
        forecast: {},
        loading: true,

        appid: '74ab00f9f5d6f488185edff7e764b725'
    };

    fetchWeather(city = this.state.value, weatherForecast) {
        let dataFor = weatherForecast === 'weather' ? 'weather' : 'forecast';

        this.setState({
            loading: true
        });

        fetch(`http://api.openweathermap.org/data/2.5/${weatherForecast}?q=${city}&units=metric&appid=${this.state.appid}`)
            .then(response => response.json())
            .then(data => this.setState({
                [dataFor]: data
            }, () => {
                if (dataFor === 'weather') {
                    this.props.fetchWeather(data);
                } else {
                    this.props.fetchForecast(data);
                }
            }))
            .finally(() => this.setState({loading: false}));
    }

    componentDidMount() {
        this.fetchWeather('Krakow', 'weather');
        this.fetchWeather('Krakow', 'forecast');
    }

    render() {
        return null
    }
}

const mapStateToProps = (state) => {
    return {
        // weather: state.weather,
        // forecast: state.forecast
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeather: (weather) => { dispatch({ type: 'FETCH_WEATHER', weather: weather }) },
        fetchForecast: (forecast) => { dispatch({ type: 'FETCH_FORECAST', forecast: forecast }) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchWeather);
