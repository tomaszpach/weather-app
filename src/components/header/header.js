import React from 'react';
import Logo from './logo'
import BrandName from './brandName'

const header = ({brandName}) => (
    <header>
        <Logo/>
        <BrandName brandName={brandName} />
    </header>
);

export default header;