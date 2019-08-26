import React from 'react';

const LoginFormLabelPassword = ({ textContent }) => {
    return (
        <div className="form-label-group">
            <input type="password" id="inputPassword" className="form-control"
                   placeholder="Password" required/>
            <label htmlFor="inputPassword">{ textContent }</label>
        </div>
    );
};

export default LoginFormLabelPassword;