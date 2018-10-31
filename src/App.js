import React, {Component} from 'react';
import {connect} from 'react-redux';

import './styles/main.css';

import FetchWeather from './containers/fetchWeather';

import Loader from './components/loader/loader';
// import Header from './components/header/header';
import SearchBar from './components/searchBar';
import CurrentWeather from './components/currentWeather/currentWeather';
import WeatherForecast from './components/weatherForecast';
import AveragePressure from './components/averagePressure';
import CityNotFound from './components/cityNotFound';

class App extends Component {
    state = {
        value: '',
        loading: false,
        weather: {cod: 200}
    };
    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.fetchWeather(this.state.value, 'weather');
    //     this.fetchWeather(this.state.value, 'forecast');
    // }

    // updateSearchInputValue(e) {
    //     this.setState({
    //         value: e.target.value
    //     });
    // }

    componentDidMount() {
        // this.fetchWeather('Kraków', 'weather');
        // this.fetchWeather('Kraków', 'forecast');
        // this.props.doSomething({name: 'test', date: '02.05.20180', id: 6});
        // console.log(this.props.posts)
    }

    render() {
        return (
            <div id="app">
                <FetchWeather/>
                {/*<Header brandName={this.state.brandName}/>*/}
                {/*<SearchBar onSubmit={(e) => this.handleSubmit(e)}*/}
                {/*onInput={(e) => this.updateSearchInputValue(e)} value={this.state.value}/>*/}
                <SearchBar value={this.state.value}/>
                {this.props.loading ? (
                    <div className="loader-wrapper">
                        <Loader/>
                    </div>
                ) : this.props.weather.length >= 0 && this.props.weather[0].cod === '404' ?
                    <CityNotFound city={this.state.city}/> : (
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
        forecast: state.forecast
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeather: (weather) => {
            dispatch({type: 'FETCH_WEATHER', weather: weather})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
