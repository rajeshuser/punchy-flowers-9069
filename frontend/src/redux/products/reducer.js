import { UPDATE_PRODUCTS } from "./types";

const productsInitialState = {
	products: null,
};

export default function productsReducer(productsState = productsInitialState, action) {
	switch (action.type) {
		case UPDATE_PRODUCTS:
			// action.payload = products
			productsState = { ...productsState };
			productsState.products = action.payload;
			return productsState;
		default:
			return productsState;
	}
}
