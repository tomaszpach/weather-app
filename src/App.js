import React, {Component} from 'react';
import {connect} from 'react-redux';

import FetchWeather from './containers/fetchWeather';

import SearchBar from './components/searchBar';
// import ForecastWeather from './components/forecastWeather/ForecastWeatherWrapper';
import DailyForecast from './components/dailyForecast/DailyForecast';
import CurrentWeatherWrapper from './components/currentWeather/CurrentWeatherWrapper';

class App extends Component {
    render() {
        return (
            <div id="app">
                <FetchWeather/>
                <SearchBar />

                <CurrentWeatherWrapper weather={this.props.weather}/>
                <DailyForecast dailyForecast={this.props.dailyForecast}/>
                {/*<ForecastWeather forecast={this.props.forecast}/>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        weather: state.weather,
        forecast: state.forecast,
        dailyForecast: state.dailyForecast,
        cityFound: state.cityFound
    }
};

export default connect(mapStateToProps)(App);
