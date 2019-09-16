import React, { Fragment } from 'react';
import './menu-list-item.css';

const MenuListItem = ({ pizza }) => {
    const { pizza_name, cooking_time } = pizza;
    return(
        <Fragment>
            <span>{ pizza_name }</span>
            <span>{ cooking_time }</span>
        </Fragment>
    );
};

export default MenuListItem;