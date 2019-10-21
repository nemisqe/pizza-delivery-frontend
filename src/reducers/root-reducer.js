import UserReducer from "./user-reducer";
import MenuReducer from "./menu-reducer";
import CartReducer from "./cart-reducer";

const pizzaMenuReducer = (state, action) => {
    return {
        userData: UserReducer(state, action),
        menuData: MenuReducer(state, action),
        cartData: CartReducer(state, action)
    };
};

export default pizzaMenuReducer;