import pizzaMenuReducer from './reducers/root-reducer';
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(pizzaMenuReducer, applyMiddleware(thunkMiddleware, sagaMiddleware));

export default store;