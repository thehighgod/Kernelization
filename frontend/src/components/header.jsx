// src/components/header.jsx - Code for the header component.
// Copywrite (C) 2018, Brett Broadhurst
//
// "Bow, peasant."
//

import React, {Component} from 'react';
import Navbar from './navbar.jsx';

class Header extends Component {
    render() {
        return (
            <header className="k__header">
                <h1>Kernalization</h1>
                <Navbar title="Kernalization"/>
                <div className="k__header-icon">

                </div>
            </header>
        );
    }
}

export default Header;
