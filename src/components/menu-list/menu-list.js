import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.css';
import { connect } from 'react-redux';
import { pizzaMenuLoaded } from "../../actions/pizza-menu-actions";
import withPizzaDeliveryService from '../hoc/with-pizza-delivery-service';

class MenuList extends Component {

    componentDidMount() {
        const { pizzaService } = this.props;
        pizzaService.getAllPizzas()
            .then(data => this.props.pizzaMenuLoaded(data));
    };

    render() {
        const { pizzaMenu } = this.props;
        console.log(pizzaMenu);
        return(
            <ul>
                {
                    pizzaMenu.map(pizza => {
                        return(
                            <li key={pizza.id}><MenuListItem pizza={pizza} /></li>
                        );
                    })
                }
            </ul>
        );
    };
}

const mapStateToProps = ({ pizzaMenu }) => {
    return { pizzaMenu };
};

const mapDispatchToProps = {
    pizzaMenuLoaded
};

export default withPizzaDeliveryService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));