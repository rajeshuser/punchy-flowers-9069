import { createStore, combineReducer } from "redux";
import authReducer from "./auth/reducer";

const rootReducer = combineReducer(authReducer);

const store = createStore(rootReducer);
