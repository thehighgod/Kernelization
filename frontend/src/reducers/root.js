// reducers/root.js - Root reducer
// Copywrite (C) 2018, Brett Broadhurst
//

import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {registerReducer} from "./registerReducer";
import {userProfileReducer} from "./userProfileReducer";

// Create and export the root reducer.
export default combineReducers({
	authReducer,
	registerReducer,
	userProfileReducer
});
