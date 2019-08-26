import React from 'react';

const LoginFormFacebookAut = ({ snText }) => {
    return (
        <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit">
            <i className="fab fa-facebook-f mr-2"></i> { snText }
        </button>
    );
};

export default LoginFormFacebookAut;