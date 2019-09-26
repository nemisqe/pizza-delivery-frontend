import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import AppHeader from "../app-header/app-header";
import { HistoryPage, HomePage } from '../pages';
import LoginPage from '../../components/pages/login-page';
import RegistrationPage from '../../components/pages/registration-page';
import { connect } from 'react-redux';


const App = ({ isAuthenticated }) => {

    return (
        <main role="main" className="container">
            <AppHeader/>
            <Switch>
                <Route
                    path='/'
                    exact
                    render={() => (isAuthenticated ? (
                            <Route
                                path="/"
                                component={HomePage}
                                exact
                            />
                        ) : (
                            <Redirect to="/login" />)
                    )} />
                <Route path='/history' excact component={ HistoryPage } />
                <Route path='/registration' exact component={ RegistrationPage } />
                <Route path='/login' exact render={() => (<LoginPage/>)} />
                <Route path='/logout' exact render={() => (isAuthenticated ? (
                        <Route
                            path="/"
                            component={HomePage}
                            exact
                        />
                    ) : (
                        <Redirect to="/login" />)
                )} />
            </Switch>
        </main>
    );
};

const mapStateToProps = ({ isAuthenticated }) => {
    return { isAuthenticated };
};

export default connect(mapStateToProps)(App);