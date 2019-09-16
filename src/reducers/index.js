const initialState = {
    pizzaMenu: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                pizzaMenu: action.payload
            };

        default:
            return state;
    }
};

export default reducer;