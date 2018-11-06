// components/navbar.jsx - Navbar component
// Copywrite (C) 2018, Brett Broadhurst
//

import React from "react";
import {Link} from "react-router-dom";

const Navbar = (props) => {
	return (
		<nav className="k__header__nav">
			<ul>
				<li className="k__header__nav-item">
					<Link to="/about">About Us</Link>
				</li>
				<li className="k__header__nav-item">
					<Link to="/challenges">Challenges</Link>
				</li>
				<li className="k__header__nav-item">
					<Link to="/contests">Contests</Link>
				</li>
				<li className="k__header__nav-item">
					<Link to="/bootcamp">Bootcamp</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
