import React, { Component } from 'react';
import './registration-page.css';
import { connect } from 'react-redux';
import compose from '../../utils';
import withPizzaDeliveryService from "../hoc/with-pizza-delivery-service";
import { fetchLoginUserData } from '../../actions/user-actions';
import {Redirect} from "react-router-dom";
import Dialog from 'react-bootstrap-dialog';

class LoginPage extends Component {

    state = {
        clientName: '',
        password: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.clientName === '' || this.state.password === '') {
            e.preventDefault();
            return this.dialog.show({
                title: 'Empty fields',
                body: 'Enter nickname and password',
                bsSize: 'large',
                actions: [
                    Dialog.OKAction()
                ]
            })
        } else {
            this.props.fetchUserData(this.state.clientName, this.state.password);
        }
    };

    render() {

        if (window.localStorage.getItem('clientName')) {
            return <Redirect to='/' />
        }

        return (
            <form className="reg-page__form">
                <h3>Login below</h3>
                <label className="reg-page__label">
                    <p className="label-txt">ENTER YOUR NAME</p>
                    <input type="text"
                           className="input"
                           onChange={(e) => this.setState({ clientName: e.target.value })}
                           value={this.state.clientName}/>
                    <div className="line-box">
                        <div className="line"></div>
                    </div>
                </label>
                <label className="reg-page__label">
                    <p className="label-txt">ENTER YOUR PASSWORD</p>
                    <input type="password"
                           className="input"
                           value={this.state.password}
                           onChange={(e) => this.setState({ password: e.target.value })}/>
                    <div className="line-box">
                        <div className="line"></div>
                    </div>
                </label>
                <button className="reg-page__button" onClick={this.handleSubmit}>submit</button>
                <Dialog ref={(component) => { this.dialog = component }} />
            </form>
        );
    };
}

const mapStateToProps = ({ clientName, isAuthenticated, loading }) => {
    return { clientName, isAuthenticated, loading };
};

const mapDispatchToProps = (dispatch, { pizzaService }) => {
    return {
        fetchUserData: fetchLoginUserData(pizzaService, dispatch)
    };
};

export default compose(
    withPizzaDeliveryService(),
    connect(mapStateToProps, mapDispatchToProps)
)(LoginPage);