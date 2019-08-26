import React from 'react';
import LoginFormContainer from './login-form-container';


const LoginBlock = () => {
    return (
        <div>
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <LoginFormContainer/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LoginBlock;