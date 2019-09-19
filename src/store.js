import reducer from './reducers/pizza-menu-reducer';
import { createStore } from "redux";


const store = createStore(reducer);
export default store;