import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import { userLogout, checkAuth } from "../../actions/user-actions";
import './app-header.css';
import PropTypes from 'prop-types';

const LogoutLink = ({ userLogout }) => {
    return(
        <li
            className="nav-item"
            onClick={() => userLogout()}
            key='logout-link'>
            <Link
                className="nav-link"
                to='/logout'>
                Log out
            </Link>
        </li>
    );
};

LogoutLink.propTypes = {
    userLogout: PropTypes.func
};

const LoginRegistrationLink = () => {
    if (window.localStorage.getItem('clientName')) {
        return <Redirect to='/' />
    }

    return(
        <React.Fragment>
            <li className="nav-item" key='registration-link'>
                <Link className="nav-link" to='/registration'>Registration</Link>
            </li>
            <li className="nav-item" key='login-link'>
                <Link className="nav-link" to='/login'>Login</Link>
            </li>
        </React.Fragment>
    );
};

const HistoryLink = () => {

    if (!window.localStorage.getItem('clientName')) {
        return null;
    }

    return(
        <li className="nav-item " key='cart-link'>
            <Link className="nav-link" to='/history'>History</Link>
        </li>
    );
};

const WelcomeTitle = ({ clientName }) => {

    return(
        <li className="nav-item welcome-title" key='cart-link'>
            <span className="badge badge-primary">Welcome back, { clientName }!</span>
        </li>
    );
};

WelcomeTitle.propTypes = {
    clientName: PropTypes.string
};

class AppHeader extends Component {

    componentDidMount() {
        const { checkAuth } = this.props;
        console.log(this.props);
        checkAuth();
    }

    render() {
        const { isAuthenticated, userLogout, clientName } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Pizza-Delivery</Link>
                { isAuthenticated ? <WelcomeTitle clientName={clientName}/> : null }
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav header-navigation-links">
                        <li className="nav-item" key="main-link">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        { isAuthenticated ? <HistoryLink/> : null }
                        { isAuthenticated ? <LogoutLink userLogout={userLogout}/> : <LoginRegistrationLink/> }
                    </ul>
                </div>
            </nav>
        );
    }

    static get propTypes() {
        return {
            checkAuth: PropTypes.func.isRequired,
            userLogout: PropTypes.func.isRequired,
            isAuthenticated: PropTypes.bool,
            clientName: PropTypes.string
        };
    }
}

const mapStateToProps = ({ UserReducer: {isAuthenticated, clientName} }) => {
    return { isAuthenticated, clientName };
};

const mapDispatchToProps = {
    userLogout,
    checkAuth
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);