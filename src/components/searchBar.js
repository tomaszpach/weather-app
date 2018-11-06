import React from 'react';

const SearchBar = ({onSubmit, onInput, value}) => (
        <form id="search-form" onSubmit={(e) => onSubmit(e)}>
            <label>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="fas fa-map-marker-alt"/></span>
                    <input type="search" className="form-control" placeholder="Kraków" aria-describedby="basic-addon1"
                           onInput={(e) => onInput(e)} defaultValue={value}/>
                </div>
            </label>
            <div className="control">
                <button className="btn btn-primary">Check weather</button>
            </div>
        </form>
    )
;

export default SearchBar;
