import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { userLogout, checkAuth } from "../../actions/user-actions";

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

const LoginRegistrationLink = () => {
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

const CartLink = () => {

    if (!window.localStorage.getItem('clientName')) {
        return null;
    }

    return(
        <li className="nav-item " key='cart-link'>
            <Link className="nav-link" to='/cart'>Cart</Link>
        </li>
    );
};

class AppHeader extends Component {

    componentDidMount() {
        const { checkAuth } = this.props;
        checkAuth();
    };

    render() {

        const { isAuthenticated, userLogout } = this.props;

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
                        { isAuthenticated ? <LogoutLink userLogout={userLogout}/> : <LoginRegistrationLink/> }
                        { isAuthenticated ? <CartLink/> : null }
                    </ul>
                </div>
            </nav>
        );
    };
}



const mapStateToProps = ({ isAuthenticated, clientName }) => {
    return { isAuthenticated, clientName };
};

const mapDispatchToProps = {
    userLogout,
    checkAuth
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);