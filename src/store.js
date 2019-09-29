import pizzaMenuReducer from './reducers/pizza-menu-reducer';
import { createStore } from "redux";

const store = createStore(pizzaMenuReducer);
window.store = store;

export default store;