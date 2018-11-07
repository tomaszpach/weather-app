import React from 'react';

const cityNotFound = ({location}) => {
    const locationFirstLetterToUpperCase = location.charAt(0).toUpperCase() + location.slice(1);
    return (
        <div id="not-found">
            <h2>Nie znaleziono pogody dla "<b>{locationFirstLetterToUpperCase}</b>".</h2>
            <p>Spróbuj wpisać inną lokalizację, lub sprawdź czy nie masz literówki w nazwie.</p>
        </div>
    )
};

export default cityNotFound;
