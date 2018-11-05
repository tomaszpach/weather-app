import React from 'react';

const SearchBar = ({onSubmit, onInput, value}) => (
        <form id="search-form" onSubmit={(e) => onSubmit(e)}>
            <label>
                <div className="field">
                    <p className="control has-icons-left">
                        <input onInput={(e) => onInput(e)}
                               defaultValue={value} type="search"
                               className="input" placeholder="Kraków"/>
                        <span className="icon is-small is-left">
                                <i className="fas fa-map-marker-alt"/>
                            </span>
                    </p>
                </div>
            </label>
            <div className="control">
                <button className="btn btn-primary">Check weather</button>
            </div>
        </form>
    )
;

export default SearchBar;
