import React, { Component } from 'react';
import './registration-page.css';

class RegistrationPage extends Component {

    render() {
        return (
            <form className="reg-page__form">
                <h3>Registration below</h3>
                <label className="reg-page__label">
                    <p className="label-txt">ENTER YOUR NAME</p>
                    <input type="text"
                           className="input"
                           name="username"/>
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                </label>
                <label className="reg-page__label">
                    <p className="label-txt">ENTER YOUR PASSWORD</p>
                    <input type="text"
                           name="password"
                           className="input"/>
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                </label>
                <button type="submit" className="reg-page__button">submit</button>
            </form>
        );
    };
}

export default RegistrationPage;