import React from 'react';

const LoginFormGoogleAut = ({ snText }) => {
    return (
        <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit">
            <i className="fab fa-google mr-2"></i>
            { snText }
        </button>
    );
};

export default LoginFormGoogleAut;