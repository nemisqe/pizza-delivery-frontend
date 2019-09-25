import {pizzaAddedTocart} from "./pizza-menu-actions";

const correctLogin = (...args) => ({
    type: 'POST_LOGIN_SUCCESS',
    payload: args
});

const userError = (error) => ({
    type: 'FETCH_USER_DATA_FAILURE',
    payload: error
});

const userLogout = () => ({
    type: 'USER_LOGOUT'
});

const registrationSuccess = () => ({
    type: 'USER_REGISTRATION_SUCCESS'
});

export const checkAuth = () => ({
    type: 'CHECK_USER_FOR_AUTH'
});

const makeOrderSuccess = (...args) => ({
    type: 'MAKE_ORDER_SUCCESS',
    payload: args
});

const fetchLoginUserData = (pizzaService, dispatch) => (clientName, password) => {
    pizzaService.loginUser(clientName, password)
        .then(e => dispatch(correctLogin(e.clientName, e.password, e.id)))
        .catch(err => dispatch(userError(err)));
};

const fetchRegistrationUserData = (pizzaService, dispatch) => (clientName, password) => {
    pizzaService.registerUser(clientName, password)
        .then(() => dispatch(registrationSuccess()))
        .catch(err => {
            console.log(err);
            dispatch(userError(err))
        });
};

const fetchMakeOrderData = (pizzaService, dispatch) => (clientId, isReady, cooking_time) => {
    pizzaService.makeOrder(clientId, isReady, cooking_time)
        .then(e => {
            console.log(e);
            console.log(clientId, isReady, cooking_time);
            dispatch(makeOrderSuccess(e))
        })
        .catch(error => console.error(error));
};

export {
    fetchLoginUserData,
    fetchRegistrationUserData,
    fetchMakeOrderData,
    userLogout
};

// clientId === current clientId