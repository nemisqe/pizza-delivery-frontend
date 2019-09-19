const initialState = {
    userData: {},
    loading: false,
    isAuthenticated: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_DATA_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'FETCH_USER_DATA_SUCCESS':
            return {
                ...state,
                userData: action.payload,
                loading: false
            };
        case 'FETCH_USER_DATA_FAILURE':
            return {
                ...state,
                userData: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default userReducer;