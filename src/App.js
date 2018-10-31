import React, {Component} from 'react';
import {connect} from 'react-redux';

import './styles/main.css';

import FetchWeather from './containers/fetchWeather';

import Loader from './components/loader/loader';
import SearchBar from './components/searchBar';
import CurrentWeather from './components/currentWeather/currentWeather';
import WeatherForecast from './components/weatherForecast';
import AveragePressure from './components/averagePressure';
import CityNotFound from './components/cityNotFound';

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
                {Object.keys(this.props.weather).length === 0 ? (
                    <div>Wpisz miasto dla ktorego chcesz sprawdzic pogode</div>
                ) : this.props.loading ? (
                    <div className="loader-wrapper">
                        <Loader/>
                    </div>
                ) : this.props.weather[0].cod === 404 || this.props.weather[0].cod === 400 ? (
                    <CityNotFound city={this.props.location}/>
                ) : (
                    <div>
                        <CurrentWeather weather={this.props.weather[0]}/>
                        <AveragePressure forecast={this.props.forecast[0]}/>
                        <WeatherForecast forecast={this.props.forecast[0]}/>
                    </div>
                )}
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
        location: state.location
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
