// components/header.jsx - Header component
// Copywrite (C) 2018, Brett Broadhurst
//

import React from "react";
import {Link} from "react-router-dom";
import Navbar from "./navbar.jsx";

const Header = (props) => {
	return (
		<div className="k__header">
			<div className="k__header-branding">
				<img className="k__header-branding-logo" src="#" alt="#"/>
				<Link to="/">Kernelization</Link>
			</div>
			
			<Navbar isLoggedIn={false}/>
			<div className="k__header__login">
				<Link to="/login"><button>Login</button></Link>
			</div>
		</div>
	);
};

export default Header;
