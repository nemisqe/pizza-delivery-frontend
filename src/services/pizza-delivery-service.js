import axios from 'axios';

export default class PizzaService {

    _basicUrl = 'http://localhost:3001/';

    getAllPizzas = async () => {
        return await axios.get(`${this._basicUrl}menu`)
            .then(res => res.data);

    };

    getUsers = async () => {
        return await axios.get(`${this._basicUrl}clients`)
            .then(res => res.data);
    };
}