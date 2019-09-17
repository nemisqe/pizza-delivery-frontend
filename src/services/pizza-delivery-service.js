import axios from 'axios';

export default class PizzaService {

    _basicUrl = 'http://localhost:3001/';

    getAllPizzas = () => {
        return axios.get(`${this._basicUrl}menu`)
            .then(res => res.data);

    };
}