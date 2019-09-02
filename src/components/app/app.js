import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../app-header/app-header';
import LoginBlock from '../login-page/login-block';
import '../login-page/login-form.css';
import PizzaMenu from "../pizza-menu/pizza-menu";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import RegistrationPage from '../registration-page';

export default class App extends Component {

    state = {
        id: null
    };

    onPizzaSelected = (id) => {
        this.setState({
            selectedPizza: id
        });
    };

    render() {
        return (
            <Router>
                <div>
                    <AppHeader/>
                    <Route path="/registration" component={ RegistrationPage }/>
                    <Route path="/" exact component={ MainPage }/>
                    <Route path="/login" component={ LoginBlock }/>
                    <Route path="/menu" component={ PizzaMenu }/>
                </div>
            </Router>
        );
    };
}