import React from 'react';

const LoginFormLabelMail = ({ textContent }) => {
    return (
        <div className="form-label-group">
            <input type="email" id="inputEmail" className="form-control"
                   placeholder="Email address" required autoFocus/>
            <label htmlFor="inputEmail">{ textContent }</label>
        </div>
    );
};

export default LoginFormLabelMail;