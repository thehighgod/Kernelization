// src/components/footer.jsx - Code for the footer component.
// Copywrite (C) 2018, Brett Broadhurst
//
// "Bow, peasant."
//

import React, {Component} from 'react';

const Footer = (props) => {
    return (
        <footer className="k__footer">
            <div className="k__footer-logo">
                <span>{props.title}</span>
            </div>

            <nav className="k__footer-column">
                <ul>
                    <li>
                        <h4>Column</h4>
                    </li>
                    <li>
                        <a href="#">Filler</a>
                    </li>
                    <li>
                        <a href="#">Filler</a>
                    </li>
                    <li>
                        <a href="#">Filler</a>
                    </li>
                    <li>
                        <a href="#">Filler</a>
                    </li>
                </ul>
            </nav>
            <nav className="k__footer-column">
                <ul>
                    <li>
                        <h4>Column</h4>
                    </li>
                    <li>
                        <a href="#">Filler</a>
                    </li>
                    <li>
                        <a href="#">Filler</a>
                    </li>
                    <li>
                        <a href="#">Filler</a>
                    </li>
                    <li>
                        <a href="#">Filler</a>
                    </li>
                </ul>
            </nav>
            <nav className="k__footer-column">
                <ul>
                    <li>
                        <h4>Column</h4>
                    </li>
                    <li>
                        <a href="#">Filler</a>
                    </li>
                    <li>
                        <a href="#">Filler</a>
                    </li>
                    <li>
                        <a href="#">Filler</a>
                    </li>
                    <li>
                        <a href="#">Filler</a>
                    </li>
                </ul>
            </nav>

            <hr />

            <div className="k__footer-bottom">
                <span>
                    Copywrite &copy; 2018, Kernalization Inc
                </span>
            </div>
        </footer>
    );
};

export default Footer;
