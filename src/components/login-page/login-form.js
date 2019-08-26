import React from 'react';
import LoginFormLabelMail from './login-form-label-mail';
import LoginFormGoogleAut from './login-form-google-aut';
import LoginFormFacebookAut from './login-form-facebook-aut'
import LoginFormLabelPassword from "./login-form-label-password";

const LoginForm = () => {
    return (
        <form className="form-signin">
            <LoginFormLabelMail textContent="Email address"/>
            <LoginFormLabelPassword textContent="Password"/>

            <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" htmlFor="customCheck1">Remember
                    password</label>
            </div>
            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign
                in
            </button>

            <hr className="my-4"/>
            <LoginFormGoogleAut snText="Sign in with Google"/>
            <LoginFormFacebookAut snText="Sign in with Facebook"/>
        </form>
    );
};

export default LoginForm;