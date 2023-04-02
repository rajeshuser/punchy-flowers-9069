import { UPDATE_PRODUCTS } from "./types";
import axios from "axios";
import { api } from "../../globals";

export function updateProducts(payload) {
	return {
		type: UPDATE_PRODUCTS,
		payload,
	};
}

export function getProducts(payload) {
	// payload = query
	return async function (dispatch) {
		console.log("thunk");
		try {
			const response = await axios({
				method: "get",
				url: `https://dark-jade-swallow-robe.cyclic.app/products`,
				params: payload,
			});
			const products = response.data;
			dispatch(updateProducts(products));
		} catch (error) {
			console.log({ error: error.message });
		}
	};
}
