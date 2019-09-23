import React, { Component } from 'react';
import './registration-page.css';
import {fetchRegistrationUserData} from "../../actions/user-actions";
import { connect } from 'react-redux';
import withPizzaDeliveryService from "../hoc/with-pizza-delivery-service";
import compose from "../../utils";
import {Redirect} from "react-router-dom";

class RegistrationPage extends Component {

    state = {
        clientName: '',
        password: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.clientName === '' || this.state.password === '') {
            e.preventDefault();
            alert('Fill in username and password');
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
                    <input type="text"
                           onChange={(e) => this.setState({ password: e.target.value })}
                           className="input"/>
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                </label>
                <button type="submit" onClick={this.handleSubmit} className="reg-page__button">submit</button>
            </form>
        );
    };
}

const mapStateToProps = ({ clientName }) => {
    console.log({clientName});
    return { clientName };
};

const mapDispatchToProps = (dispatch, { pizzaService }) => {
    return {
        fetchRegistrationUserData: fetchRegistrationUserData(pizzaService, dispatch)
    };
};

export default compose(
    withPizzaDeliveryService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RegistrationPage);