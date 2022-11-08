import thunk from "redux-thunk";
import {
  applyMiddleware,
  compose,
  combineReducers,
  legacy_createStore,
} from "redux";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { wishlistReducer } from "./wishlist/wishlist.reducer";
import { productReducer } from "./products/product.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  product: productReducer,
});
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
