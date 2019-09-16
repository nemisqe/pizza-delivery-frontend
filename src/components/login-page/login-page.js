import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginPage extends Component {

    state = {
        username: '',
        password: '',
        errors: {}
    };

    render() {

        return (
            <form>
                <h1>Login Below</h1>
                <input
                    type="text"
                    name="clientName"
                    placeholder="Enter name"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default LoginPage;