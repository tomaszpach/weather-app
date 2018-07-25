import React from 'react';

const cityNotFound = ({city}) => (
    <div id="not-found">
        <h2><b>{city}</b>, not found.</h2>
        <p>Please try other city or check if you do not have a typo.</p>
    </div>
);

export default cityNotFound;