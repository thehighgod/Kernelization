// components/navbar.jsx - Navbar component
// Copywrite (C) 2018, Brett Broadhurst
//

import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
	return (
		<nav className="k__header__nav">
			<ul>
				<li className="k__header__nav-item">
					<NavLink to="/about">About Us</NavLink>
				</li>
				<li className="k__header__nav-item">
					<NavLink to="/bootcamp">Bootcamp</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
