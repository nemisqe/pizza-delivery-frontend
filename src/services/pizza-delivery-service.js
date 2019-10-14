import axios from 'axios';

export default class PizzaService {
    _basicUrl = 'http://localhost:3001/';

    getAllPizzas = async () => {
        return await axios.get(`${this._basicUrl}menu/`)
            .then(res => res.data);
    };

    loginUser = async (username, password) => {
        return await axios.post(`${this._basicUrl}authentication/`, {
            "clientName": username,
            "password": password
        })
            .then(res => {
                return res;
            })
            .catch(error => {
                return error.response.status;
            });
    };

    registerUser = async (username, password) => {
        return await axios.post(`${this._basicUrl}clients/add/`, {
            "clientName": username,
            "password": password
        })
            .then(res => {
                return res.data;
            })
            .catch(error => {
                console.error(error);
            });
    };

    makeOrder = async (clientName, isReady, cooking_time) => {
        return await axios.post(`${this._basicUrl}menu/add/`, {
            "clientName": clientName,
            "isReady": isReady,
            "cooking_time": cooking_time
        })
            .then(res => {
                if (res.data.cooking_time === 0) {
                    alert('Your cart is empty');
                    return;
                }
                return res.data;
            })
            .catch(error => console.userError(error))
    };

    getUserOrderHistory = async (clientName) => {
        return await axios.get(`${this._basicUrl}history/${clientName}/`)
            .then(res => res.data)
            .catch(error => console.userError(error));
    };
}