import React, { Component } from 'react';
import './main-page.css';

export default class MainPage extends Component {
    render() {
        return (
            <div className="container centered">
                <h3 className="main-page__title">Main page</h3>
                <h4 className="main-page__welcome-title">Welcome!</h4>
            </div>
        );
    };
};