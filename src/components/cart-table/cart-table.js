import React from 'react';
import './cart-table.css';
import { connect } from 'react-redux';

const CartTable = ({ items, totalCookingTime, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, name, count, totalCookingTime } = item;
            //wtf?? idx
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
                    items.map(renderRow)
                }
                </tbody>
            </table>

            <div className="total">
                Total waiting time: {totalCookingTime} sec
            </div>
        </div>
    );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        totalCookingTime: orderTotal
    };
};

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => {
            console.log('inc ', id);
        },
        onDecrease: (id) => {
            console.log('dec ', id);
        },
        onDelete: (id) => {
            console.log('del ', id);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);