const initialState = {
    pizzaMenu: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 200
};

const updateCartItems = (cartItems, item, idx) => {

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (pizza, item = {}) => {

    const { id = pizza.id, count = 0, name = pizza.pizza_name, totalCookingTime = pizza.cooking_time } = item;

    return {
        id,
        name,
        count: count + 1,
        totalCookingTime: totalCookingTime + pizza.cooking_time
    };
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_MENU_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'FETCH_MENU_SUCCESS':
            return {
                ...state,
                pizzaMenu: action.payload,
                loading: false
            };
        case 'FETCH_MENU_FAILURE':
            return {
                ...state,
                pizzaMenu: [],
                loading: false,
                error: action.payload
            };
        case 'PIZZA_ADDED_TO_CART':
            const pizzaId = action.payload;
            const pizza = state.pizzaMenu.find(pizza => pizza.id === pizzaId);

            const itemIndex = state.cartItems.findIndex(({id}) => id === pizzaId);
            const item = state.cartItems[itemIndex];

            const newItem = updateCartItem(pizza, item);

            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
            };

        default:
            return state;
    }
};

export default reducer;