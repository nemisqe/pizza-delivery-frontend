import React from 'react';
import {PizzaServiceConsumer} from '../pizza-delivery-service-context/';

const withPizzaDeliveryService = () => (Wrapped) => {

    return (props) => {
        return(
            <PizzaServiceConsumer>
                {
                    (pizzaService) => {
                        return <Wrapped {...props} pizzaService={pizzaService}/>;
                    }
                }
            </PizzaServiceConsumer>
        );
    };
};

export default withPizzaDeliveryService;