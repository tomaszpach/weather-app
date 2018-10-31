import {Component} from 'react'
import { connect } from 'react-redux';

class FetchWeather extends Component {
    fetchWeather(city = this.props.searchInput, weatherForecast) {
        let dataFor = weatherForecast === 'weather' ? 'weather' : 'forecast';

        fetch(`http://api.openweathermap.org/data/2.5/${weatherForecast}?q=${city}&units=metric&appid=${this.props.appid}`)
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
        if (this.props.location !== '') {
            this.fetchWeather(this.props.location, 'weather');
            this.fetchWeather(this.props.location, 'forecast');
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            this.fetchWeather(this.props.location, 'weather');
            this.fetchWeather(this.props.location, 'forecast');
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
        fetchWeather: (weather) => { dispatch({ type: 'FETCH_WEATHER', weather: weather }) },
        fetchForecast: (forecast) => { dispatch({ type: 'FETCH_FORECAST', forecast: forecast }) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchWeather);
