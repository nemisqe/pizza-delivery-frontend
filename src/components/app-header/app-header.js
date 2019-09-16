import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class AppHeader extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Pizza-Delivery</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" key="main-link">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item" key='menu-link'>
                            <Link className="nav-link" to='/menu'>Menu</Link>
                        </li>
                        <li className="nav-item" key='registration-link'>
                            <Link className="nav-link" to='/registration'>Registration</Link>
                        </li>
                        <li className="nav-item" key='login-link'>
                            <Link className="nav-link" to='/login'>Login</Link>
                        </li>
                        <li className="nav-item" key='cart-link'>
                            <Link className="nav-link" to='/cart'>Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
};