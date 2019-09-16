import React from 'react';
import './spinner.css';

const Spinner = () => {
    return (
        <div className="lds-css">
            <div className="lds-rolling">
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;