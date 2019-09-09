import React, { Component } from 'react';

import RegistrationService from '../../services/registration-service';

export default class LoginBlock extends Component {

    regService = new RegistrationService();

    componentDidMount() {
        this.regService
            .getAllUsers()
            .then((body) => console.log(body));
    };

    render() {
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
    }
};

const LoginFormContainer = () => {
    return (
        <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <LoginForm/>
        </div>
    );
};

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

const LoginFormFacebookAut = ({ snText }) => {
    return (
        <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit">
            <i className="fab fa-facebook-f mr-2"></i> { snText }
        </button>
    );
};

const LoginFormGoogleAut = ({ snText }) => {
    return (
        <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit">
            <i className="fab fa-google mr-2"></i>
            { snText }
        </button>
    );
};

const LoginFormLabelMail = ({ textContent }) => {
    return (
        <div className="form-label-group">
            <input type="email" id="inputEmail" className="form-control"
                   placeholder="Email address" required autoFocus/>
            <label htmlFor="inputEmail">{ textContent }</label>
        </div>
    );
};

const LoginFormLabelPassword = ({ textContent }) => {
    return (
        <div className="form-label-group">
            <input type="password" id="inputPassword" className="form-control"
                   placeholder="Password" required/>
            <label htmlFor="inputPassword">{ textContent }</label>
        </div>
    );
};