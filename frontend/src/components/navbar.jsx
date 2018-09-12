// src/components/navbar.jsx - Code for the navbar component.
// Copywrite (C) 2018, Brett Broadhurst
//
// "Bow, peasant."
//

import {BrowserRouter as Router, Link} from 'react-router-dom';

import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="k__header-navbar">
                <div className="k__header-navbar-branding">
                    <span>{this.props.title}</span>
                </div>

                <ul className="k__header-navbar-main">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/competitions">Competitions</Link>
                    </li>
                    <li>
                        <Link to="/bootcamps">Bootcamps</Link>
                    </li>
                    <li>
                        <Link to="/awards">Awards</Link>
                    </li>
                </ul>
                <ul className="k__header-navbar-right">
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
