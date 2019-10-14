const initialState = {
    pizzaMenu: [],
    clientName: '',
    clientId: null,
    isAuthenticated: false,
    loading: true,
    userErrors: [],
    cartItems: [],
    orderTotal: 0,
    menuErrors: [],
    currentUser: null,
    currentOrder: [],
    currentUserOrderHistory: [],
    signUpSuccess: false
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
                menuErrors: action.payload
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
            localStorage.setItem('clientName', action.payload[0]);
            localStorage.setItem('token', action.payload[1]);
            console.log(localStorage.getItem('token'));
            return {
                ...state,
                clientName: action.payload[0],
                clientId: action.payload[2],
                loading: false,
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
                clientName: action.payload[0],
                signUpSuccess: true
            };

        case 'LOGIN_DATA_REQUESTED':
            return {
                ...state,
                loading: true
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
                userErrors: action.payload
            };

        case 'USER_HISTORY_REQUESTED':
            return {
                ...state,
                loading: true
            };

        case 'USER_ALREADY_REGISTERED':
            return {
                ...state,
                userErrors: action.payload,
                signUpSuccess: false
            };

        case '409_STATUS_CODE':
            return {
                ...state,
                userErrors: action.payload,
                signUpSuccess: false
            };

        default:
            return state;
    }
};

export default pizzaMenuReducer;