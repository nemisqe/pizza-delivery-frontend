const correctLogin = (...args) => ({
    type: 'POST_LOGIN_SUCCESS',
    payload: args
});

const loginDataRequested = () => ({
    type: 'FETCH_LOGIN_DATA'
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

const userHistoryRequested = () => ({
    type: 'USER_HISTORY_REQUESTED'
});

const getUserHistory = (userOrderHistory) => ({
    type: 'GET_USER_ORDER_HISTORY',
    payload: userOrderHistory
});

const fetchLoginUserData = (pizzaService, dispatch) => (clientName, password) => {
    loginDataRequested();
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

const fetchMakeOrderData = (pizzaService, dispatch) => (clientName, isReady, cooking_time) => {
    pizzaService.makeOrder(clientName, isReady, cooking_time)
        .then(e => {
            dispatch(makeOrderSuccess(e))
        })
        .catch(error => console.error(error));
};

const fetchUserOrderHistory = (pizzaService, dispatch) => (clientName) => {
    userHistoryRequested();
    pizzaService.getUserOrderHistory(clientName)
        .then(e => dispatch(getUserHistory(e)))
        .catch(error => console.error(error))
};

export {
    fetchLoginUserData,
    fetchRegistrationUserData,
    fetchMakeOrderData,
    fetchUserOrderHistory,
    userLogout
};

// clientId === current clientId