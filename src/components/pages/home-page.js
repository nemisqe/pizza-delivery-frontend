import React from 'react';
import MenuList from '../menu-list/index';
import CartTable from "../cart-table/cart-table";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const HomePage = ({isAuthenticated}) => {

    if (!isAuthenticated) {
        return <Redirect to='/login'/>;
    }

    return(
        <div>
            <div className="row justify-content-center alert-success alert">
                You are logged in. Add some pizza to your cart
            </div>
            <MenuList />
            <CartTable />
        </div>
    );
};

const mapStateToProps = ({ UserReducer: {isAuthenticated} }) => {
    return { isAuthenticated };
};

export default connect(mapStateToProps)(HomePage);