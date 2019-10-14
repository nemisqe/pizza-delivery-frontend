import pizzaMenuReducer from './reducers/root-reducer';
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

const store = createStore(pizzaMenuReducer, applyMiddleware(thunkMiddleware));

export default store;