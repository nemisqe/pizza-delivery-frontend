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
                alert('Success!');
                console.log(res.data);
                return res.data[0];
            })
            .catch(error => {
                alert('Incorrect username');
                console.error(error);
            });
    };

    registerUser = async (username, password) => {
        return await axios.post(`${this._basicUrl}clients/add/`, {
            "clientName": username,
            "password": password
        })
            .then(res => {
                alert('Now you can log in');
                return res.data[0];
            })
            .catch(error => {
                if (error.response.status === 409) {
                    alert('Username is already registered');
                } else {
                    alert('Something is wrong');
                }
            });
    };

    makeOrder = async (clientId, isReady, cooking_time) => {
        return await axios.post(`${this._basicUrl}menu/add/`, {
            "clientId": clientId,
            "isReady": isReady,
            "cooking_time": cooking_time
        })
            .then(res => {
                alert('You made an order! Please wait');
                return res.data;
            })
            .catch(error => console.error(error))
    };
}