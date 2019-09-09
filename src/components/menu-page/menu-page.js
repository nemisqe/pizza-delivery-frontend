import React, { Component } from 'react';
import './pizza-menu.css';
import PizzaService from '../../services/pizza-delivery-service';
import Spinner from '../spinner';
import ErrorIndicator from '../../components/error-indicator';
import App from '../app';

export default class PizzaMenu extends Component {

    pizzaService = new PizzaService();

    state = {
        pizza: {},
        loading: true,
        error: false,
        pizzaListInputs: null
    };

    constructor() {
        super();
    };

    componentDidMount() {
        this.pizzaService
            .getAllPizzas()
            .then(pizzaListInputs => {
                this.setState({ pizzaListInputs })
            })
            .then(this.onPizzaLoaded)
            .catch(this.onError);
    };

    componentDidCatch() {
        this.setState({ error: true });
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
                <div className="form-check">

                        <input className="form-check-input filled-in" type="checkbox" value=""  id={ id }/>
                        <label className="form-check-label" htmlFor={ id }>
                            { `Pizza: ${pizza_name};  Cooking time is ${cooking_time} sec` }
                        </label>

                </div>
            );
        });
    };

    render() {

        const { pizza, loading, error, pizzaListInputs } = this.state;
        
        if (error) {
            return <ErrorIndicator/>
        }

        let items = this.renderItems(pizzaListInputs);

        const spinner = loading ? <Spinner/> : null;

        return (
            <div className="container centered form-check">
                <h1>Menu</h1>
                <form className="menu-checkboxes-form">
                    { spinner }
                    { items }
                    <button type="submit">Make order</button>
                </form>
            </div>
        );
    };
};