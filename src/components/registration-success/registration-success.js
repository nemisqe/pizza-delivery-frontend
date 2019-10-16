import React from 'react';
import './registration-success.css';
import {Link} from "react-router-dom";

const RegistrationSuccess = () => {
    return(
        <div className="alert alert-success" role="alert">
            Registration success! Now you can <Link to='/login'>LOGIN</Link>
        </div>
    );
};

export default RegistrationSuccess;