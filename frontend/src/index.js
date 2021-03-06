// src/index.js - Render the app.
// Copywrite (C) 2018, Brett Broadhurst
//

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store";
import Kernelization from "./containers/kernelization.jsx";
import "./stylesheets/main.scss";

let store = configureStore();

ReactDOM.render(
	<Provider store={store}><Kernelization /></Provider>,
	document.getElementById("root"));
