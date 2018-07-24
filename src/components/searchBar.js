import React from 'react';

const SearchBar = ({onSubmit, onInput, value}) => (
        <form className="search-form" onSubmit={(event) => onSubmit(event)}>
            <label>
                <div className="field">
                    <p className="control has-icons-left">
                        <input onInput={(event) => onInput(event)}
                               value={value} type="search"
                               className="input" placeholder="London"/>
                        <span className="icon is-small is-left">
                                <i className="fas fa-map-marker-alt"/>
                            </span>
                    </p>
                </div>
            </label>
            <div className="control">
                <button className="button is-link">Check weather</button>
            </div>
        </form>
    )
;

export default SearchBar;