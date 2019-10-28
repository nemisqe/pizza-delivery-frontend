const initialState = {
    clientName: '',
    isAuthenticated: false,
    signinErrors: [],
    currentUserOrderHistory: [],
    signUpSuccess: false,
    signupErrors: []
};

const checkAuth = (state) => {
    const lsName = window.localStorage.getItem('clientName');
    const lsToken = window.localStorage.getItem('token');
    if (lsToken) {
        return {
            ...state.userData,
            clientName: lsName,
            isAuthenticated: true,
            currentUserOrderHistory: []
        }
    }
    return state;
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_ORDER_HISTORY':
            return {
                ...state,
                currentUserOrderHistory: action.payload,
                isAuthenticated: true
            };
        case 'FETCH_USER_DATA_SUCCESS':
            return {
                ...state,
                userData: action.payload.data,
                loading: false,
                isAuthenticated: true,
                currentUserOrderHistory: []
            };

        case 'POST_LOGIN_SUCCESS':
            localStorage.setItem('clientName', action.payload[0]);
            localStorage.setItem('token', action.payload[2]);
            return {
                ...state,
                clientName: action.payload[0],
                loading: false,
                signinErrors: [],
                isAuthenticated: true,
                currentUserOrderHistory: []
            };

        case 'USER_LOGOUT':
            window.localStorage.removeItem('clientName');
            window.localStorage.removeItem('token');
            return {
                ...state,
                clientName: '',
                isAuthenticated: false,
                currentUserOrderHistory: []
            };

        case 'CHECK_USER_FOR_AUTH':
            return checkAuth(state);

        case 'USER_REGISTRATION_SUCCESS':
            return {
                ...state,
                clientName: action.payload[0],
                signUpSuccess: true,
                isAuthenticated: false
            };

        case 'LOGIN_DATA_REQUESTED':
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
            };

        case 'MAKE_ORDER_SUCCESS':
            return {
                ...state,
                currentOrder: action.payload,
            };

        case 'FETCH_USER_DATA_FAILURE':
            return {
                ...state,
                userData: [],
                loading: false,
                signupErrors: action.payload,
                isAuthenticated: false,
            };

        case 'USER_HISTORY_REQUESTED':
            return {
                ...state,
                loading: true,
                currentUserOrderHistory: []
            };

        case 'USER_ALREADY_REGISTERED':
            return {
                ...state,
                signupErrors: action.payload,
                signUpSuccess: false,
                isAuthenticated: false,
                currentUserOrderHistory: []
            };

        case '409_STATUS_CODE':
            return {
                ...state,
                signupErrors: action.payload,
                signUpSuccess: false
            };


        default:
            return state
    }
};

export default UserReducer;
