import React from 'react';

const {
    Provider: PizzaServiceProvider,
    Consumer: PizzaServiceConsumer
} = React.createContext();

export {
    PizzaServiceConsumer,
    PizzaServiceProvider
};