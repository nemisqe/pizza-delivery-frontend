import pizzaMenuReducer from './reducers/pizza-menu-reducer';
import { createStore } from "redux";

const store = createStore(pizzaMenuReducer);

export default store;