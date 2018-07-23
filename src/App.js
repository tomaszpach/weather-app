import React, {Component} from 'react';

import SearchBar from './components/searchBar';
import CurrentWeather from './components/currentWeather';
import WeatherForecast from './components/weatherForecast';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: {}
        }
    }

    render() {
        return (
            <div className="App">
                <SearchBar />
                <CurrentWeather />
                <WeatherForecast />
            </div>
        );
    }
}

export default App;
