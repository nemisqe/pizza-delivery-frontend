import React, { Component } from 'react';
import './cart-table.css';
import { connect } from 'react-redux';
import { pizzaAddedToCart, pizzaRemovedFromCart, allPizzasRemovedFromCart } from "../../actions/pizza-menu-actions";
import {fetchMakeOrderData} from "../../actions/user-actions";
import withPizzaDeliveryService from "../hoc/with-pizza-delivery-service";
import compose from "../../utils";
import Dialog from 'react-bootstrap-dialog';
import {bindActionCreators} from "redux";

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

        if (orderTotal === 0) {

            return this.dialog.show({
                title: 'Empty cart',
                body: 'Your cart is empty. Please add some pizza',
                bsSize: 'large',
                actions: [
                    Dialog.OKAction()
                ]
            })
        }

        this.dialog.show({
            title: 'Success',
            body: 'Your order is currently cooking',
            actions: [
                Dialog.OKAction()
            ]
        });
        fetchMakeOrderData(clientName, 'currently cooking', orderTotal);

        setTimeout(() => {
            alert('Your order is ready!');
        }, orderTotal * 1000);
    };

    render() {
        Dialog.setOptions({
            defaultOkLabel: 'Go to page'
        });

        const { items } = this.props;
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
                <Dialog ref={(component) => { this.dialog = component }} />
            </div>
        );
    };
}

const mapStateToProps = ({ CartReducer: {cartItems, orderTotal}, UserReducer: { clientName } }) => {
    return {
        items: cartItems,
        clientName,
        orderTotal,
        totalCookingTime: orderTotal
    };
};

const mapDispatchToProps = (dispatch, { pizzaService }) => {
    return bindActionCreators ({
        fetchMakeOrderData: fetchMakeOrderData(pizzaService),
        onIncrease: pizzaAddedToCart,
        onDecrease: pizzaRemovedFromCart,
        onDelete: allPizzasRemovedFromCart
    }, dispatch);
};

export default compose(
    withPizzaDeliveryService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CartTable);