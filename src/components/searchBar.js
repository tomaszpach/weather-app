import React from 'react';
import {connect} from 'react-redux';

class SearchBar extends React.Component {
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
            <form id="search-form" onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="fas fa-map-marker-alt"/></span>
                        <input type="search" className="form-control" placeholder="Ochmanów" aria-describedby="basic-addon1"
                               onInput={(e) => this.updateSearchInputValue(e)} defaultValue={this.props.searchInput}/>
                    </div>
                </label>
                <div className="control">
                    <button className="btn btn-primary">Sprawdź pogodę</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchInput: state.searchInput,
        location: state.location
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearchInput: (inputText) => {
            dispatch({ type: 'UPDATE_SEARCH_INPUT', searchInput: inputText})
        },
        updateWeather: (location) => {
            dispatch({type: 'UPDATE_WEATHER', location: location})
        },
        updateLoader: (loading) => {
            dispatch({type: 'UPDATE_LOADER', loading: loading})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
