// src/store.js - Redux state store
// Copywrite (C) 2018, Brett Broadhurst
//

import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import rootReducer from "./reducers/root";

const loggerMiddleware = createLogger();

// Create the application's state store.
function configureStore(initialState = {})
{
	return createStore(
		rootReducer,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	);
}

export default configureStore;
