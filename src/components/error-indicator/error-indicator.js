import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="container centered">
            <span className="error-text">
                Oops. Page not found :(
            </span>
        </div>
    );
};

export default ErrorIndicator;