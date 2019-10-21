import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import AppHeader from "../app-header/app-header";
import HomePage from '../pages/home-page';
import HistoryPage from '../pages/history-page';
import LoginPage from '../../components/pages/login-page';
import RegistrationPage from '../../components/pages/registration-page';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFooter from "../app-footer";

const App = ({ isAuthenticated }) => {
    console.log(isAuthenticated);
    return (
        <React.Fragment>
        <AppHeader/>
        <main role="main" className="container">
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact
                />
                <Route path='/registration' exact component={ RegistrationPage } />
                <Route path='/login' exact component={LoginPage} />
                <Route path='/logout' exact render={() => (isAuthenticated ? (
                        <Route
                            path="/"
                            component={HomePage}
                            exact
                        />
                    ) : (
                        <Redirect to="/login" />)
                )} />
                <Route path='/history' render={() => (isAuthenticated ? (
                        <Route
                            path="/history"
                            component={HistoryPage}
                        />
                    ) : (
                        <Redirect to="/login" />)
                )} />
            </Switch>

        </main>
            <AppFooter/>
        </React.Fragment>
    );
};

App.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = ({ UserReducer: { isAuthenticated } }) => {
    return { isAuthenticated };
};

export default connect(mapStateToProps)(App);