import { UPDATE_PRODUCTS } from "./types";
import axios from "axios";

export function updateProducts(payload) {
	return {
		type: UPDATE_PRODUCTS,
		payload,
	};
}

export function getProducts(payload) {
	// payload = query
	return async function (dispatch) {
		try {
			const products = await axios({
				method: "get",
				url: "",
				params: payload,
			});
			dispatch(updateProducts(products));
		} catch (error) {
			console.log({ error: error.message });
		}
	};
}
