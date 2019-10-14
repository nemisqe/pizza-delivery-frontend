import React from 'react';
import MenuList from '../menu-list/index';
import CartTable from "../cart-table/cart-table";

const HomePage = () => {

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

export { HomePage };