import React, { Component } from 'react';
import './registration-page.css';
import {fetchRegistrationUserData} from "../../actions/user-actions";
import { connect } from 'react-redux';
import withPizzaDeliveryService from "../hoc/with-pizza-delivery-service";
import compose from "../../utils";
import {Redirect} from "react-router-dom";
import Dialog from 'react-bootstrap-dialog';
import {bindActionCreators} from "redux";
import SignInError from "../sign-in-error";
import RegistrationSuccess from "../registration-success";

class RegistrationPage extends Component {

    state = {
        clientName: '',
        password: '',
        showErrorDiv: false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            console.log(this.props.signUpSuccess);
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.clientName === '' || this.state.password === '') {

            return this.dialog.show({
                title: 'Empty fields',
                body: 'Enter nickname and password',
                bsSize: 'large',
                actions: [
                    Dialog.OKAction()
                ]
            })
        } else {
            this.props.fetchRegistrationUserData(this.state.clientName, this.state.password);
        }
    };

    render() {

        const { clientName } = this.props;

        if (clientName) {
            return <Redirect to='/login' />;
        }

        return (
            <form className="reg-page__form">
                { this.props.userErrors.length !== 0 ? <SignInError errorBody="Username already exist" errorHeader="Error" /> : null }
                { this.props.signUpSuccess ? <RegistrationSuccess/> : null }
                <h3>Registration below</h3>
                <label className="reg-page__label">
                    <p className="label-txt">ENTER YOUR NAME</p>
                    <input type="text"
                           className="input"
                           onChange={(e) => this.setState({ clientName: e.target.value })}/>
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                </label>
                <label className="reg-page__label">
                    <p className="label-txt">ENTER YOUR PASSWORD</p>
                    <input type="password"
                           onChange={(e) => this.setState({ password: e.target.value })}
                           className="input"/>
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                </label>
                <button type="submit" onClick={this.handleSubmit} className="reg-page__button">submit</button>
                <Dialog ref={(component) => { this.dialog = component }} />
            </form>
        );
    };
}

const mapStateToProps = ( {clientName, signupErrors, signUpSuccess }) => {
    return { clientName, userErrors: signupErrors, signUpSuccess };
};

const mapDispatchToProps = (dispatch, { pizzaService }) => {
    return bindActionCreators({
        fetchRegistrationUserData: fetchRegistrationUserData(pizzaService)
    }, dispatch);
};

export default compose(
    withPizzaDeliveryService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RegistrationPage);