import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.css';
import { connect } from 'react-redux';
import {fetchMenu, pizzaAddedToCart} from "../../actions/pizza-menu-actions";
import withPizzaDeliveryService from '../hoc/with-pizza-delivery-service';
import compose from '../../utils';
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";

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

MenuList.propTypes = {
    pizzaMenu: PropTypes.array.isRequired,
    onAddedToCart: PropTypes.func
};

class MenuListContainer extends Component {
    componentDidMount() {
        this.props.fetchMenu();
    }

    render() {

        const { pizzaMenu, loading, menuErrors, onAddedToCart } = this.props;

        if (loading) {
            return <Spinner/>;
        }

        if (menuErrors.length !== 0) {
            return <ErrorIndicator/>;
        }

        return <MenuList pizzaMenu={pizzaMenu} onAddedToCart={onAddedToCart}/>

    }

    static get propTypes() {
        return {
            pizzaMenu: PropTypes.array,
            loading: PropTypes.any,
            userError: PropTypes.array,
            onAddedToCart: PropTypes.func,
            fetchMenu: PropTypes.func
        };
    }
}

const mapStateToProps = ({ pizzaMenu, loading, menuErrors }) => {
    return { pizzaMenu, loading, menuErrors };
};

const mapDispatchToProps = (dispatch, { pizzaService }) => {
    return bindActionCreators({
        fetchMenu: fetchMenu(pizzaService),
        onAddedToCart: pizzaAddedToCart
    }, dispatch);
};

export default compose(
    withPizzaDeliveryService(),
    connect(mapStateToProps, mapDispatchToProps)
)(MenuListContainer);