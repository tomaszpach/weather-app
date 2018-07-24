import React, {Component} from 'react';

import './styles/main.css';

import Loader from './components/loader/loader';
import SearchBar from './components/searchBar';
import CurrentWeather from './components/currentWeather/currentWeather';
import WeatherForecast from './components/weatherForecast';
import CityNotFound from './components/cityNotFound';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            weather: {},
            loading: false,

            appid: '74ab00f9f5d6f488185edff7e764b725'
        }
    }

    fetchData(city = 'London') {
        this.setState({
            loading: true
        });
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.state.appid}`)
            .then(response => response.json())
            .then(data => this.setState({
                weather: data,
                loading: false
            }, () => console.log('this.state.weather', this.state.weather)));
    }

    handleSubmit(event) {
        // alert(this.state.value);
        this.fetchData(this.state.value);
        event.preventDefault();
    }

    updateSearchInputValue(event) {
        this.setState({
            value: event.target.value
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div id="app">
                <SearchBar onSubmit={(event) => this.handleSubmit(event)}
                           onInput={(event) => this.updateSearchInputValue(event)} value={this.state.value}/>
                {this.state.loading ? <Loader/> : this.state.weather.cod === '404' ?
                     <CityNotFound city={this.state.value}/> : <CurrentWeather weather={this.state.weather}/>}

                <WeatherForecast/>
            </div>
        )
    }
}

export default App;