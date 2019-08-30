import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import PizzaMenu from './components/pizza-menu';
import LoginBlock from './components/login-page';
import './components/login-page/login-form.css';

const App = () => {
    return (
        <div>
            <AppHeader/>
            <PizzaMenu/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));