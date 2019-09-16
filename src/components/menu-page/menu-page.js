import React, { Component } from 'react';
import PizzaService from '../../services/pizza-delivery-service';
import Spinner from '../spinner';
import ErrorIndicator from '../../components/error-indicator';
import './menu-page.css';
import withPizzaDeliveryService from "../hoc/with-pizza-delivery-service";
import { connect } from 'react-redux';
import { pizzaMenuLoaded } from '../../actions/pizza-menu-actions';

class PizzaMenu extends Component {

    componentDidMount() {
        const { pizzaService } = this.props;
        console.log(pizzaService);
        const data = pizzaService.getAllPizzas();
        console.log(data);
    };

    render() {
        const { pizzaMenu } = this.props;
        return(
            <ul>
                {
                    pizzaMenu.map(pizza => {
                        return(
                            <li key={pizza.id}>
                                
                            </li>
                        );
                    })
                }
            </ul>
        );
    };
}

const mapStateToProps = ({ pizzaMenu }) => {
    return {
        pizzaMenu
    };
};

const mapDispatchToProps = {
    pizzaMenuLoaded
};

export default withPizzaDeliveryService()(connect(mapStateToProps, mapDispatchToProps)(PizzaMenu));