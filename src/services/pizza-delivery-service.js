export default class PizzaService {

    _basicUrl = 'http://localhost:3001/';

    async getResource(url) {
        const res = await fetch(`${this._basicUrl}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        const body = await res.json();
        return body;
    }

    async getAllPizzas() {
        const res = await this.getResource(`menu`);
        return res;
    }

    async getPizzaById(id) {
        const pizza = await this.getResource(`menu/${id}`);
        return this._transformPizza(pizza);
    }

    _transformPizza = (pizza) => {
        return {
            pizzaName: pizza.pizza_name,
            cookingTime: pizza.cooking_time,
            id: pizza.id
        };
    };
}

const pizza = new PizzaService();

pizza.getAllPizzas().then((body) => console.log(body));