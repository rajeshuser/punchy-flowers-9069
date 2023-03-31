import {
	LOGIN_USER,
	LOGOUT_USER,
	ADD_TO_CART,
	ADD_TO_FAVOURITE,
	UPDATE_QUANTITY,
	REMOVE_PRODUCT,
} from "./types";

export function loginUser(user) {
	return {
		type: LOGIN_USER,
		payload: user,
	};
}

export function logoutUser() {
	return {
		type: LOGOUT_USER,
	};
}

export function addToCart(payload) {
	return {
		type: ADD_TO_CART,
		payload,
	};
}

export function addToFavourite(payload) {
	return {
		type: ADD_TO_FAVOURITE,
		payload,
	};
}

export function updateQuantity(payload) {
	return {
		type: UPDATE_QUANTITY,
		payload,
	};
}

export function removeProduct(payload) {
	return {
		type: REMOVE_PRODUCT,
		payload,
	};
}
