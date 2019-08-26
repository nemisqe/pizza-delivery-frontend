import React from 'react';
import LoginForm from './login-form';

const LoginFormContainer = () => {
    return (
        <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <LoginForm/>
        </div>
    );
};

export default LoginFormContainer;