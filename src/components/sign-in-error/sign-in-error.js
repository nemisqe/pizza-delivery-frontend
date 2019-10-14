import React from 'react';
import './sign-in-error.css';

const SignInError = ({errorHeader, errorBody}) => {
    return(
        <div className="alert alert-danger" role="alert">
           <p className="alert-link">{errorHeader}</p>{errorBody}
        </div>
    );
};

export default SignInError;