import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import AppHeader from "../app-header/app-header";
import { CartPage, HomePage } from '../pages';
import LoginPage from '../../components/pages/login-page';
import RegistrationPage from '../../components/pages/registration-page';

class App extends Component {

    render() {
        return (
            <main role="main" className="container">
                <AppHeader/>
                <Switch>
                    <Route path='/' exact component={ HomePage } />
                    <Route path='/cart' excact component={ CartPage } />
                    <Route path='/registration' exact component={ RegistrationPage } />
                    <Route path='/login' exact component={ LoginPage } />
                </Switch>
            </main>
        );
    };
}

export default App;