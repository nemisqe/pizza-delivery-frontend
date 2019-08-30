import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../app-header/app-header';
import LoginBlock from '../login-page/login-block';
import '../login-page/login-form.css';

class App extends Component {

    render() {
        return (
            <div>
                <AppHeader/>
            </div>
        );
    };
}

export default App;