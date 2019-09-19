import pizzaMenuReducer from './pizza-menu-reducer';
import userReducer from './user-redcuer';
import { combineReducers } from 'redux';

export default combineReducers({
    pizzaMenuReducer,
    userReducer
});