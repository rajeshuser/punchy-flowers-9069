import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "../redux/user/reducer";
import productsReducer from "../redux/products/reducer";
import axios from "axios";

const rootReducer = combineReducers({ userState: userReducer, productsState: productsReducer });

const store = createStore(rootReducer);

export default store;

let previousUserState = JSON.stringify(store.getState().userState);
store.subscribe(async () => {
	try {
		// update the database, only if userState is changed
		const currentUserState = JSON.stringify(store.getState().userState);
		if (previousUserState === currentUserState) {
			return;
		}
		previousUserState = currentUserState;
		const userState = store.getState().userState;
		await axios({
			method: "put",
			url: "",
			headers: {
				"content-type": "application/json",
				authorizarition: "token",
			},
			body: userState,
		});
	} catch (error) {
		console.log({ error: error.message });
	}
});
