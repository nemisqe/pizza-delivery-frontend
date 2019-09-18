import React from 'react';
import MenuList from '../menu-list';
import CartTable from "../cart-table/cart-table";

const HomePage = () => {

    return(
        <div>
            <MenuList />
            <CartTable/>
        </div>
    );
};

export { HomePage };