import axios from 'axios';
import { loginSuccess } from '../actions/user-actions';

export default class PizzaService {

    _basicUrl = 'http://localhost:3001/';

    getAllPizzas = async () => {
        return await axios.get(`${this._basicUrl}menu/`)
            .then(res => res.data);

    };

    getUsers = async () => {
        return await axios.get(`${this._basicUrl}clients/`)
            .then(res => res.data);
    };

    loginUser = async (username, password) => {
        const res = await axios.post(`${this._basicUrl}authentication/`, {
            "clientName": username,
            "password": password
        })
            .then(res => {
                console.log('login successful!', res.data[0]);
                return res.data[0];
            })
            .catch(error => {
                console.error(error);
            });

        return res;
    };

    registrateUser = async (username, password) => {
        const res = await axios.post(`${this._basicUrl}clients/add/`, {
            "clientName": username,
            "password": password
        })
            .then(res => {
                console.log('registration successful!', res.data[0]);
                return res.data[0];
            })
            .catch(error => {
                console.error(error);
            })
    };
}