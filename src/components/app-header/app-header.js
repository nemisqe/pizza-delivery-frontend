import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { userLogout } from "../../actions/user-actions";

const AppHeader = ({ isAuthenticated, userLogout }) => {

    const LoginLogoutLink = () => {

        if (isAuthenticated) {
            return(
                <li className="nav-item" key='logout-link'>
                    <Link
                        className="nav-link"
                        to='/logout'
                        onClick={() => userLogout()}
                    >Log out</Link>
                </li>
            );
        }

        return(
            <li className="nav-item" key='login-link'>
                <Link className="nav-link" to='/login'>Login</Link>
            </li>
        );
    };

    const RegistrationLink = () => {

        if (!isAuthenticated) {
            return (
                <li className="nav-item" key='registration-link'>
                    <Link className="nav-link" to='/registration'>Registration</Link>
                </li>
            );
        }

        return null;
    };

    const CartLink = () => {

        if (!isAuthenticated) {
            return null;
        }

        return(
            <li className="nav-item " key='cart-link'>
                <Link className="nav-link" to='/cart'>Cart</Link>
            </li>
        );
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Pizza-Delivery</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav header-navigation-links">
                    <li className="nav-item" key="main-link">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <RegistrationLink />
                    <LoginLogoutLink />
                    <CartLink />
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = ({ isAuthenticated, clientName }) => {
    return { isAuthenticated, clientName };
};

const mapDispatchToProps  = dispatch => ({
    userLogout: () => dispatch(userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);