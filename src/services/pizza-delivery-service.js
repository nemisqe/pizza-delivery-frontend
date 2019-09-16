import axios from 'axios';

export default class PizzaService {

    _basicUrl = 'http://localhost:3001/';

    getAllPizzas = () => {
        const str = [];
        axios.get(`${this._basicUrl}menu`)
            .then(res => str.push(res.data));
        return str;
    }
}