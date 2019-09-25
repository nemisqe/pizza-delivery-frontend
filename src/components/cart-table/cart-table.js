import React, { Component } from 'react';
import './cart-table.css';
import { connect } from 'react-redux';
import { pizzaAddedTocart, pizzaRemovedFromCart, allPizzasRemovedFromCart } from "../../actions/pizza-menu-actions";
import {fetchMakeOrderData} from "../../actions/user-actions";
import withPizzaDeliveryService from "../hoc/with-pizza-delivery-service";
import compose from "../../utils";

class CartTable extends Component {

    renderRow = (item, idx) => {
        const { id, name, count, totalCookingTime } = item;
        const { onIncrease, onDecrease, onDelete } = this.props;
            return(
                <tr key={id}>
                    <td>{idx + 1}</td>
                    <td>{name}</td>
                    <td>{count}</td>
                    <td>{totalCookingTime}</td>
                    <td>
                        <button
                            onClick={() => onDelete(id)}
                            className="btn btn-outline-danger btn-sm float-right">
                            <i className="fa fa-trash-o" />
                        </button>
                        <button
                            onClick={() => onIncrease(id)}
                            className="btn btn-outline-success btn-sm float-right">
                            <i className="fa fa-plus-circle" />
                        </button>
                        <button
                            onClick={() => onDecrease(id)}
                            className="btn btn-outline-warning btn-sm float-right">
                            <i className="fa fa-minus-circle" />
                        </button>
                    </td>
                </tr>
        );
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { fetchMakeOrderData, clientName, orderTotal } = this.props;

        fetchMakeOrderData(clientName, 20, orderTotal);
    };

    render() {
        const { items, totalCookingTime } = this.props;
        return (
            <div className="shopping-cart-table">
                <h2>Your Order</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Pizza</th>
                        <th>Count</th>
                        <th>Cooking time</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        items.map(this.renderRow)
                    }
                    </tbody>
                </table>

                <div className="total">
                    <button className="order-button" onClick={this.handleSubmit}>Make order</button>
                    Total waiting time: {this.props.orderTotal} sec
                </div>
            </div>
        );
    };
}

const mapStateToProps = ({ cartItems, orderTotal, clientName }) => {
    return {
        items: cartItems,
        clientName,
        orderTotal,
        totalCookingTime: orderTotal
    };
};

const mapDispatchToProps = (dispatch, { pizzaService }) => {
    return {
        fetchMakeOrderData: fetchMakeOrderData(pizzaService, dispatch),
        onIncrease: (id) => dispatch(pizzaAddedTocart(id)),
        onDecrease: (id) => dispatch(pizzaRemovedFromCart(id)),
        onDelete: (id) => dispatch(allPizzasRemovedFromCart(id))
    };
};

export default compose(
    withPizzaDeliveryService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CartTable);