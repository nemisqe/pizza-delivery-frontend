const userLoaded = (user) => {
    return {
        type: 'FETCH_USER_DATA_SUCCESS',
        payload: user
    };
};

const userDataRequested = () => {
    return {
        type: 'FETCH_USER_DATA_REQUEST'
    };
};

const userError = (error) => {
    return {
        type: 'FETCH_USER_DATA_FAILURE',
        payload: error
    }
};

const fetchUserData = (pizzaService, dispatch) => () => {
    dispatch(userDataRequested());
    pizzaService.getUsers()
        .then(data => dispatch(userLoaded(data)))
        .catch(error => dispatch(userError(error)));
};

export {
    fetchUserData
};