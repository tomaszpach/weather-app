import React, {Component} from 'react';

// The user is able to query by city name
// This probably needs to be a class
// Type in search bar and update city on enter / click on button
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }
    }

    handleSubmit(event) {
        alert(this.state.searchValue);
        event.preventDefault();
    }

    updateSearchInputValue(event) {
        this.setState({
            searchValue: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>
                    City:
                    <input onInput={(event) => this.updateSearchInputValue(event)} type="search"
                           placeholder="What are you looking for?" value={this.state.searchValue}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default SearchBar;