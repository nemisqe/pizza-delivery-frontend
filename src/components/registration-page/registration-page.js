import React, { Component } from 'react';
import './registration-page.css';

export default class RegistrationPage extends Component {

    state = {
        username: '',
        password: '',
        email: '',
        errors: {}
    };

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        };
        console.log(user);
    }

    render() {
        return (
            <form className="reg-page__form">
                <h3>Registration</h3>
                <label className="reg-page__label">
                    <p className="label-txt">ENTER YOUR EMAIL</p>
                    <input type="text"
                           className="input"
                           name="email"/>
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                </label>
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