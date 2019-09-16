import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './store';
import ErrorBoundry from './components/error-boundry';
import { BrowserRouter as Router } from 'react-router-dom';

import './components/login-page/login-page.css';
import {Provider} from "react-redux";
import PizzaService from './services/pizza-delivery-service';
import {PizzaServiceProvider} from "./components/pizza-delivery-service-context";

const pizzaService = new PizzaService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <PizzaServiceProvider value={pizzaService}>
                <Router>
                    <App/>
                </Router>
            </PizzaServiceProvider>
        </ErrorBoundry>
    </Provider>
    ,document.getElementById('root'));