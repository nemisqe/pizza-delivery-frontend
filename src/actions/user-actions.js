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

const registrationSuccess = (newUser) => ({
    type: 'USER_REGISTRATION_SUCCESS',
    payload: newUser
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

const dataExistErr = (err) => ({
    type: '409_STATUS_CODE',
    payload: err
});

const fetchLoginUserData = (pizzaService) => (clientName, password) => dispatch => {
    loginDataRequested();
    pizzaService.loginUser(clientName, password)
        .then(res => {
            console.log(res);
            if (res === 404) dispatch(userError(res));
            dispatch(correctLogin(res.data[0].clientName, res.data[0].password, res.data[0].token))
        })
        .catch(err => {
            dispatch(userError(err))
        });
};

const fetchRegistrationUserData = (pizzaService) => (clientName, password) => dispatch => {
    pizzaService.registerUser(clientName, password)
        .then(res => {
            if (res === 409) {
                dispatch(dataExistErr(res));
            }
            console.log(res);
            dispatch(registrationSuccess(res))
        })
        .catch(err => {
            dispatch(userError(err))
        });
};

const fetchMakeOrderData = (pizzaService) => (clientName, isReady, cooking_time) => dispatch => {
    pizzaService.makeOrder(clientName, isReady, cooking_time)
        .then(e => {
            dispatch(makeOrderSuccess(e))
        })
        .catch(error => console.error(error));
};

const fetchUserOrderHistory = (pizzaService) => clientName => dispatch => {
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