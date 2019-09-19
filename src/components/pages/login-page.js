import React, { Component } from 'react';
import './registration-page.css';
import { connect } from 'react-redux';
import compose from '../../utils';
import withPizzaDeliveryService from "../hoc/with-pizza-delivery-service";
import { fetchUserData } from '../../actions/user-actions';

class LoginPage extends Component {

    state = {
        username: '',
        password: ''
    };

    componentDidMount() {
        this.props.fetchUserData();
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
        console.log(userData);
    };

    render() {
        return (
            <form className="reg-page__form" onSubmit={this.handleSubmit}>
                <h3>Login below</h3>
                <label className="reg-page__label">
                    <p className="label-txt">ENTER YOUR NAME</p>
                    <input type="text"
                           className="input"
                           name="username"
                           onChange={this.handleChange}
                           value={this.state.username}/>
                    <div className="line-box">
                        <div className="line"></div>
                    </div>
                </label>
                <label className="reg-page__label">
                    <p className="label-txt">ENTER YOUR PASSWORD</p>
                    <input type="text"
                           name="password"
                           className="input"
                           value={this.state.password}
                           onChange={this.handleChange}/>
                    <div className="line-box">
                        <div className="line"></div>
                    </div>
                </label>
                <button type="submit" className="reg-page__button">submit</button>
            </form>
        );
    };
}

const mapStateToProps = ({userData}) => {
    return { userData };
};

const mapDispatchToProps = (dispatch, { pizzaService }) => {
    return {
        fetchUserData: fetchUserData(pizzaService, dispatch)
    };
};

export default compose(
    withPizzaDeliveryService(),
    connect(mapStateToProps, mapDispatchToProps)
)(LoginPage);