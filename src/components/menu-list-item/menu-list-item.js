import React from 'react';
import './menu-list-item.css';

const MenuListItem = ({ pizza, onAddedToCart }) => {

    const { pizza_name, cooking_time, pizza_pictures } = pizza;

    return(
        <div className="pizza-list-item">
            <div className="pizza-cover">
                <img src={`http://localhost:3001/pizza-pictures/${pizza_pictures}`} alt="pizza-cover" width="120" height="120"/>
            </div>
            <div className="pizza-details">
                <p className="pizza-name">{ pizza_name }</p>
                <div className="pizza-cooking-time">{ cooking_time } seconds</div>
                <button
                    onClick={() => {
                        onAddedToCart()
                    }}
                    className="btn btn-info add-to-cart">Add to cart</button>
            </div>
        </div>
    );
};

export default MenuListItem;