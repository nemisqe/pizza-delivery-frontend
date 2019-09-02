import React, { Component } from 'react';
import './pizza-menu.css';
import PizzaService from '../../services/pizza-delivery-service';
import Spinner from '../spinner';
import ErrorIndicator from '../../components/error-indicator';

export default class PizzaMenu extends Component {

    pizzaService = new PizzaService();

    state = {
        pizza: {},
        loading: true,
        error: false,
        pizzaList: null
    };

    constructor() {
        super();
    };

    componentDidMount() {
        this.pizzaService
            .getAllPizzas()
            .then(pizzaList => {
                this.setState({ pizzaList })
            })
            .then(this.onPizzaLoaded)
            .catch(this.onError);
    };

    onPizzaLoaded = (pizza) => {
       this.setState({ pizza, loading: false });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    renderItems = (arr) => {
        return !arr ? null : arr.map(({ pizza_name, cooking_time, id }) => {
            return (
                <li className="list-group-item" key={id}>
                    { `Pizza: ${pizza_name};  Cooking time is ${cooking_time} sec` }
                </li>
            );
        });
    };

    render() {

        const { pizza, loading, error, pizzaList } = this.state;

        let items = this.renderItems(pizzaList);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;

        return (
            <div className="container centered">
                <h1>Menu</h1>
                <ul className="list-group list-group-flush">
                    { errorMessage }
                    { spinner }
                    { items }
                </ul>
            </div>
        );
    };
};