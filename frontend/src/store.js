// src/store.js - Redux state store
// Copywrite (C) 2018, Brett Broadhurst
//

import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root";

// Create the application's state store.
function configureStore(initialState = {})
{
	return createStore(
		rootReducer,
		applyMiddleware(thunk)
	);
}

export default configureStore;
