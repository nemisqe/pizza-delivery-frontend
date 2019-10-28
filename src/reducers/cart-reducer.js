const initialState = {
    cartItems: [],
    currentOrder: [],
    orderTotal: 0,
    pizzaMenu: []
};

const updateCartItems = (cartItems, item, idx) => {

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),

            ...cartItems.slice(idx + 1)
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateTotalCookingTime = (pizza, orderTotal, quantity) => orderTotal + quantity * pizza.cooking_time;

const updateOrder = (state, pizzaId, quantity) => {
    const { cartItems, orderTotal, pizzaMenu } = state;

    const pizza = pizzaMenu.find(({id}) => id === pizzaId);

    const itemIndex = cartItems.findIndex(({id}) => id === pizzaId);

    const item = cartItems[itemIndex];

    const newItem = updateCartItem(pizza, item, quantity);

    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: updateTotalCookingTime(pizza, orderTotal, quantity)
    };
};

const updateCartItem = (pizza, item = {}, quantity) => {

    const { id = pizza.id,
        count = 0,
        name = pizza.pizza_name,
        totalCookingTime = 0 } = item;

    return {
        id,
        name,
        count: count + quantity,
        totalCookingTime: totalCookingTime + quantity * pizza.cooking_time
    };
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MENU_REQUEST':
            return {
                ...state,
                pizzaMenu: []
            };
        case 'FETCH_MENU_SUCCESS':
            return {
                ...state,
                pizzaMenu: action.payload
            };
        case 'FETCH_MENU_FAILURE':
            return {
                ...state,
                pizzaMenu: [],
                loading: false,
                menuErrors: action.payload
            };
        case 'PIZZA_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

        case 'PIZZA_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);

        case 'ALL_PIZZAS_REMOVED_FROM_CART':
            const item = state.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);
        default:
            return state;
    }
};

export default CartReducer;
