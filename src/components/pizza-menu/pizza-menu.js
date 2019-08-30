import React, { Component } from 'react';
import './pizza-menu.css';
import PizzaService from '../../services/pizza-delivery-service';
import Spinner from '../spinner/spinner';

export default class PizzaMenu extends Component {

    pizzaService = new PizzaService();

    state = {
        pizza: {},
        loading: true
    };

    constructor() {
        super();
        this.updatePizza();
    };

    onPizzaLoaded = (pizza) => {
       this.setState({ pizza, loading: false });
    };

    updatePizza() {
        this.pizzaService
            .getPizzaById(5)
            .then(this.onPizzaLoaded);
    };

    render() {

        const { pizza, loading } = this.state;

        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <PizzaMenuView/> : null;

        return (
            <div className="container centered">
                <h1>Menu</h1>
                { spinner }
                <PizzaMenuView pizza={ pizza }/>
            </div>
        );
    };
};

const PizzaMenuView = ({ pizza }) => {

    const {  pizzaName, cookingTime,  } = pizza;

    return (
        <React.Fragment>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    { `Pizza: ${pizzaName};  Cooking time is ${cookingTime} sec` }
                </li>
            </ul>
        </React.Fragment>
    );
};