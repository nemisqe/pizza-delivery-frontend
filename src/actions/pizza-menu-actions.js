const pizzaMenuLoaded = (newPizzaMenu) => {
    return {
        type: 'FETCH_MENU_SUCCESS',
        payload: newPizzaMenu
    };
};

const menuRequested = () => {
    return {
        type: 'FETCH_MENU_REQUEST'
    };
};

const menuError = (error) => {
    return {
        type: 'FETCH_MENU_FAILURE',
        payload: error
    }
};

const fetchMenu = (pizzaService) => () => (dispatch) => {
    dispatch(menuRequested());
    pizzaService.getAllPizzas()
        .then(data => dispatch(pizzaMenuLoaded(data)))
        .catch(error => dispatch(menuError(error)));
};

export const pizzaAddedToCart = (pizzaId) => {
    return {
        type: 'PIZZA_ADDED_TO_CART',
        payload: pizzaId
    };
};

export const pizzaRemovedFromCart = (pizzaId) => {
    return {
        type: 'PIZZA_REMOVED_FROM_CART',
        payload: pizzaId
    }
};

export const allPizzasRemovedFromCart = (pizzaId) => {
    return {
        type: 'ALL_PIZZAS_REMOVED_FROM_CART',
        payload: pizzaId
    };
};

export {
    fetchMenu
};