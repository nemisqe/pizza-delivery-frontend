import React from 'react';
import './sign-in-error.css';

const SignInError = ({errorHeader, errorBody, hide}) => {
    return(
        <div className={hide}>
            <div className="alert alert-danger" role="alert">
               <p className="alert-link">{errorHeader}</p>{errorBody}
            </div>
        </div>
    );
};

export default SignInError;