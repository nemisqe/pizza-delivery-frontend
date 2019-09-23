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

const fetchLoginUserData = (pizzaService, dispatch) => (clientName, password) => {
    pizzaService.loginUser(clientName, password)
        .then(e => dispatch(correctLogin(e.clientName, e.password)))
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

export {
    fetchLoginUserData,
    fetchRegistrationUserData,
    userLogout
};