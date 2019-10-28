const initialState = {
    pizzaMenu: [],
    loading: true,
    menuErrors: []
};

const MenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MENU_REQUEST':
            return {
                ...state,
                menuErrors: [],
                loading: true,
                pizzaMenu: []
            };
        case 'FETCH_MENU_SUCCESS':
            return {
                ...state,
                menuErrors: [],
                pizzaMenu: action.payload,
                loading: false,

            };
        case 'FETCH_MENU_FAILURE':
            return {
                ...state,
                pizzaMenu: [],
                loading: false,
                menuErrors: action.payload
            };
        default:
            return state
    }
};

export default MenuReducer;
