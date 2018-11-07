import React from 'react';

const cityNotFound = ({location}) => {
    return (
        <div id="not-found">
            <h2>Nie znalazłem pogody dla <b>{location}</b>.</h2>
            <p>Spróbuj wpisać inną lokalizację, lub sprawdź czy nie masz literówki w nazwie.</p>
        </div>
    )
};

export default cityNotFound;
