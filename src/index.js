import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header'
import LoginBlock from './components/login-page';
import './components/login-page/login-form.css';

const App = () => {
    return (
        <div>
            <AppHeader/>
            <LoginBlock/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));