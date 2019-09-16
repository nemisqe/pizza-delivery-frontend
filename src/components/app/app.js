import React, { Component, Fragment } from 'react';
import '../login-page/login-page.css';
import {Route, Switch} from "react-router-dom";
import AppHeader from "../app-header/app-header";
import { CartPage, HomePage } from '../pages';

class App extends Component {

    render() {
        return (
            <Fragment>
                <AppHeader/>
                <Switch>
                    <Route path='/' exact component={ HomePage } />
                    <Route path='/cart' excact component={ CartPage } />
                </Switch>
            </Fragment>
        );
    };
}

export default App;