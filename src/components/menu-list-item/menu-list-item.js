import React from 'react';
import './menu-list-item.css';
import { connect } from 'react-redux';

const MenuListItem = ({ pizza, onAddedToCart, cartItems }) => {
    const { pizza_name, cooking_time, pizza_pictures } = pizza;
    return(
        <div className="pizza-list-item">
            <div className="pizza-cover">
                <img src={`http://localhost:3001/pizza-pictures/${pizza_pictures}`} alt="pizza-cover" width="120" height="120"/>
            </div>
            <div className="pizza-details">
                <a href="#" className="pizza-name">{ pizza_name }</a>
                <div className="pizza-cooking-time">{ cooking_time } seconds</div>
                <button
                    onClick={() => {
                        console.log(cartItems);
                        onAddedToCart()
                    }}
                    className="btn btn-info add-to-cart">Add to cart</button>
            </div>
        </div>
    );
};

const mapStateToProps = ({ cartItems }) => {
    return { cartItems };
};

export default connect(mapStateToProps)(MenuListItem);