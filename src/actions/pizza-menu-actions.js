const pizzaMenuLoaded = (newPizzaMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newPizzaMenu
    };
};

export {
    pizzaMenuLoaded
};