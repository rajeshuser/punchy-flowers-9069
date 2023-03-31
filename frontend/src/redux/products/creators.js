import { UPDATE_PRODUCTS } from "./types";
import axios from "axios";

export function updateProducts(payload) {
	return {
		type: UPDATE_PRODUCTS,
		payload,
	};
}

export function getProducts() {
	return async function (dispatch) {
		try {
			const products = await axios({
				method: "get",
				url: "",
			});
			dispatch(updateProducts(products));
		} catch (error) {
			console.log({ error: error.message });
		}
	};
}
