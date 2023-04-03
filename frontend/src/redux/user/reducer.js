import {
	LOGIN_USER,
	LOGOUT_USER,
	ADD_TO_CART,
	ADD_TO_FAVOURITE,
	UPDATE_QUANTITY,
	REMOVE_PRODUCT,
	MOVE_PRODUCTS_FROM_CART_TO_ORDERS,
} from "./types";

const userInitialState = {
	user: null,
};

export default function userReducer(userState = userInitialState, action) {
	switch (action.type) {
		case LOGIN_USER:
			// action.payload = user
			userState = { ...userState };
			userState.user = action.payload;
			return userState;
		case LOGOUT_USER:
			// action.payload = undefined
			userState = { ...userState };
			userState.user = null;
			return userState;
		case ADD_TO_CART:
			// action.payload = { productId };
			userState = { ...userState };
			action.payload.quantity = 1;
			userState.user.cart.push(action.payload);
			return userState;
		case ADD_TO_FAVOURITE:
			// action.payload = { productId };
			userState = { ...userState };
			userState.user.favourite.push(action.payload.productId);
			return userState;
		case UPDATE_QUANTITY:
			// action.payload = { productId, quantity };
			userState = { ...userState };
			for (let product of userState.user.cart) {
				if (product.productId === action.payload.productId) {
					product.quantity = action.payload.quantity;
					break;
				}
			}
			return userState;
		case REMOVE_PRODUCT:
			// action.payload = { productId };
			userState = { ...userState };
			let updatedCart = [];
			for (let product of userState.user.cart) {
				if (product.productId !== action.payload.productId) {
					updatedCart.push(product);
				}
			}
			userState.user.cart = updatedCart;
			return userState;
		case MOVE_PRODUCTS_FROM_CART_TO_ORDERS:
			// action.payload = undefined;
			userState = { ...userState };
			userState.user.orders = userState.user.cart;
			userState.user.cart = [];
			return userState;
		default:
			return userState;
	}
}
