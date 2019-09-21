import pizzaMenuReducer from "../reducers/pizza-menu-reducer";

export const checkAuthenticationFromLocalStorage = () => {

};

const correctLogin = (...args) => ({
    type: 'POST_LOGIN_SUCCESS',
    payload: args,
});

const userError = (error) => {
    return {
        type: 'FETCH_USER_DATA_FAILURE',
        payload: error
    }
};

const userLogout = () => {
    return {
        type: 'USER_LOGOUT'
    };
};

const registrationSuccess = (...args) => {
    return {
        type: 'USER_REGISTRATION_SUCCESS',
        payload: args
    };
};

const fetchLoginUserData = (pizzaService, dispatch) => (clientName, password) => {
    pizzaService.loginUser(clientName, password)
        .then(e => dispatch(correctLogin(e.clientName, e.password)))
        .catch(err => dispatch(userError(err)));
};

const fetchRegistrationUserData = (pizzaService, dispatch) => (clientName, password) => {
    pizzaService.registrateUser(clientName, password)
        .then(e => dispatch(registrationSuccess(e.clientName)))
        .catch(err => dispatch(userError(err)));
};

export {
    fetchLoginUserData,
    fetchRegistrationUserData,
    userLogout
};