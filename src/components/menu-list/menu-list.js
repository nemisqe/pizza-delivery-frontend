import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.css';
import { connect } from 'react-redux';
import {fetchMenu, pizzaAddedTocart} from "../../actions/pizza-menu-actions";
import withPizzaDeliveryService from '../hoc/with-pizza-delivery-service';
import compose from '../../utils';
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const MenuList = ({ pizzaMenu, onAddedToCart }) => {
    return(
        <ul className="pizza-list">
            {
                pizzaMenu.map(pizza => {
                    return(
                        <li key={pizza.id}><MenuListItem
                            onAddedToCart={() => onAddedToCart(pizza.id)}
                            pizza={pizza} /></li>
                    );
                })
            }
        </ul>
    );
};

class MenuListContainer extends Component {

    componentDidMount() {
        this.props.fetchMenu();
    };

    render() {
        const { pizzaMenu, loading, error, onAddedToCart } = this.props;
        
        if (loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>;
        }

        return <MenuList pizzaMenu={pizzaMenu} onAddedToCart={onAddedToCart} />
    };
}

const mapStateToProps = ({ pizzaMenu, loading, error }) => {
    return { pizzaMenu, loading, error };
};

const mapDispatchToProps = (dispatch, { pizzaService }) => {
    return {
        fetchMenu: fetchMenu(pizzaService, dispatch),
        onAddedToCart: (id) => dispatch(pizzaAddedTocart(id))
    };
};

export default compose(
    withPizzaDeliveryService(),
    connect(mapStateToProps, mapDispatchToProps)
)(MenuListContainer);