import React from 'react';

const brandName = ({brandName}) => (
    <h1 className="title">
        <div>{brandName[0]}</div>
        <div>{brandName[1]}</div>
    </h1>
);

export default brandName;