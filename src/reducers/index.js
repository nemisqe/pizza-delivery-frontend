import MenuReducer from "./menu-reducer";
import CartReducer from "./cart-reducer";
import UserReducer from "./user-reducer";
import {combineReducers} from "redux";

export default combineReducers({
    MenuReducer,
    CartReducer,
    UserReducer
});