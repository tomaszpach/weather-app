import React, {Component} from 'react';
import {connect} from 'react-redux';

import FetchWeather from './containers/fetchWeather';

import Loader from './components/loader/loader';
import SearchBar from './components/searchBar';
import CurrentWeatherWrapper from './components/currentWeather/CurrentWeatherWrapper';
import DailyForecast from './components/dailyForecast/DailyForecast';

class App extends Component {
    render() {
        return (
            <div id="app">
                <FetchWeather/>
                <SearchBar />

                {this.props.loading ? <Loader /> :
                    (
                        <div>
                            <CurrentWeatherWrapper weather={this.props.weather} location={this.props.location}/>
                            <DailyForecast dailyForecast={this.props.dailyForecast}/>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        weather: state.weather,
        dailyForecast: state.dailyForecast,
        location: state.location
    }
};

export default connect(mapStateToProps)(App);
