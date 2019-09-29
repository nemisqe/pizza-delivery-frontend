const initialState = {
    pizzaMenu: [],
    clientName: '',
    clientId: null,
    isAuthenticated: false,
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0,
    currentUser: null,
    currentOrder: [],
    currentUserOrderHistory: []
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

const checkAuth = (state) => {
    const item = window.localStorage.getItem('clientName');
    if (item) {
        return {
            ...state,
            clientName: item,
            isAuthenticated: true
        }
    }

    return state;
};

const updateOrder = (state, pizzaId, quantity) => {
    const { cartItems, pizzaMenu, orderTotal } = state;

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

const pizzaMenuReducer = (state = initialState, action) => {

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

        case 'GET_USER_ORDER_HISTORY':
            return {
                ...state,
                currentUserOrderHistory: action.payload
            };

        case 'PIZZA_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

        case 'PIZZA_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);

        case 'ALL_PIZZAS_REMOVED_FROM_CART':
            const item = state.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        case 'FETCH_USER_DATA_SUCCESS':
            return {
                ...state,
                userData: action.payload.data,
                loading: false,
                isAuthenticated: true
            };

        case 'POST_LOGIN_SUCCESS':
            window.alert('Now you can make an order');
            localStorage.setItem('clientName', action.payload[0]);
            console.log(window.localStorage);
            return {
                ...state,
                clientName: action.payload[0],
                clientId: action.payload[2],
                isAuthenticated: true
            };

        case 'USER_LOGOUT':
            window.localStorage.removeItem('clientName');
            return {
                ...state,
                clientName: '',
                clientId: null,
                isAuthenticated: false
            };

        case 'CHECK_USER_FOR_AUTH':
            return checkAuth(state);

        case 'USER_REGISTRATION_SUCCESS':
            return {
                ...state,
                clientName: action.payload[0]
            };

        case 'MAKE_ORDER_SUCCESS':
            return {
                ...state,
                currentOrder: action.payload
            };

        case 'FETCH_USER_DATA_FAILURE':
            return {
                ...state,
                userData: [],
                loading: false,
                error: action.payload
            };

        case 'USER_HISTORY_REQUESTED':
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
};

export default pizzaMenuReducer;