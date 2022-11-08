import React from 'react';
import obiwan from './obiwan.gif';

export const NotFound = (props) => {
    return (
        <div>
            <h1>These are not the droids you're looking for...</h1>
            <img src={obiwan} alt='obiwan'/>
        </div>
    );
}