import React, {Component} from 'react';

import './styles/main.css';

import Loader from './components/loader/loader';
import Header from './components/header/header';
import SearchBar from './components/searchBar';
import CurrentWeather from './components/currentWeather/currentWeather';
import WeatherForecast from './components/weatherForecast';
import AveragePressure from './components/averagePressure';
import CityNotFound from './components/cityNotFound';

class App extends Component {
    state = {
        brandName: ['Mount', 'Weather'],
        value: '',
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
                [dataFor]: data,
                city,
            }))
            .finally(() => this.setState({loading: false}));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.fetchWeather(this.state.value, 'weather');
        this.fetchWeather(this.state.value, 'forecast');
    }

    updateSearchInputValue(e) {
        this.setState({
            value: e.target.value
        });
    }

    componentDidMount() {
        this.fetchWeather('Kraków', 'weather');
        this.fetchWeather('Kraków', 'forecast');
    }

    render() {
        return (
            <div id="app">
                {/*<Header brandName={this.state.brandName}/>*/}
                <SearchBar onSubmit={(e) => this.handleSubmit(e)}
                           onInput={(e) => this.updateSearchInputValue(e)} value={this.state.value}/>
                {this.state.loading ?
                    <div className="loader-wrapper"><Loader/></div> : this.state.weather.cod === '404' ?
                        <CityNotFound city={this.state.city}/> : (
                            <div>
                                <CurrentWeather weather={this.state.weather}/>
                                <AveragePressure forecast={this.state.forecast}/>
                                <WeatherForecast forecast={this.state.forecast}/>
                            </div>
                        )}
            </div>
        )
    }
}

export default App;
