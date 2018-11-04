// reducers/root.js - Root reducer
// Copywrite (C) 2018, Brett Broadhurst
//

import {combineReducers} from "redux";
import {authReducer} from "./authReducer";

export default combineReducers({
	authReducer
});
