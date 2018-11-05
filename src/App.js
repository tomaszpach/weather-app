import React, {Component} from 'react';
import {connect} from 'react-redux';

import FetchWeather from './containers/fetchWeather';

import SearchBar from './components/searchBar';
import ForecastWeather from './components/forecastWeather/ForecastWeatherWrapper';
import DailyForecast from './components/dailyForecast/DailyForecast';
import CurrentWeather from './components/currentWeather/CurrentWeatherWrapper';

class App extends Component {
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.searchInput !== this.props.location) {
            this.props.updateLoader(true);
            this.props.updateWeather(this.props.searchInput);
        }
    }

    updateSearchInputValue(e) {
        this.props.updateSearchInput(e.target.value);
    }

    render() {
        return (
            <div id="app">
                <FetchWeather/>
                <SearchBar onInput={(e) => this.updateSearchInputValue(e)} onSubmit={(e) => this.handleSubmit(e)}
                           value={this.props.searchInput}/>

                <DailyForecast dailyForecast={this.props.dailyForecast} />
                <CurrentWeather weather={this.props.weather} />
                <ForecastWeather forecast={this.props.forecast} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        weather: state.weather,
        forecast: state.forecast,
        searchInput: state.searchInput,
        location: state.location,
        dailyForecast: state.dailyForecast,
        cityFound: state.cityFound
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeather: (weather) => {
            dispatch({type: 'FETCH_WEATHER', weather: weather})
        },
        updateSearchInput: (inputText) => {
            dispatch({type: 'UPDATE_SEARCH_INPUT', searchInput: inputText})
        },
        updateWeather: (location) => {
            dispatch({type: 'UPDATE_WEATHER', location: location})
        },
        updateLoader: (loading) => {
            dispatch({type: 'UPDATE_LOADER', loading: loading})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
