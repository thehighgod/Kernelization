// components/header.jsx - Header component
// Copywrite (C) 2018, Brett Broadhurst
//

import React from "react";
import {Link} from "react-router-dom";
import Navbar from "./navbar.jsx";

import logo from "../assets/img/logo.png";

const Header = (props) => {
	if (localStorage.getItem("user")) {
		return (
			<div className="k__header">
				<div className="k__header-branding">
					<Link to="/">
						<img className="k__header-branding-logo"
							 src={logo} alt="#"/>
					</Link>
				</div>
				
				<Navbar isLoggedIn={true}/>
				<div className="k__header__login">
					<Link to="/logout"><button>Logout</button></Link>
				</div>
			</div>
		);
	} else {
		return (
			<div className="k__header">
				<div className="k__header-branding">
					<Link to="/">
						<img className="k__header-branding-logo"
							 src={logo} alt="#"/>
					</Link>
				</div>
				
				<Navbar isLoggedIn={false}/>
				<div className="k__header__login">
					<Link to="/login"><button>Login</button></Link>
				</div>
			</div>
		);
	}
};

export default Header;
