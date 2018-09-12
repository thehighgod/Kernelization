// src/views/landing.js - The landing page view.
// Copywrite (C) 2018, Brett Broadhurst
//
// "Bow, peasant."
//

import React, {Component} from 'react';
import Header from '../components/header.jsx';
import Greeting from '../components/greeting.jsx';
import Footer from '../components/footer.jsx';

const Landing = (props) => {
    return (
        <React.Fragment>
            <Header title="Kernalization"/>
            <Greeting />
            <Footer title="Kernalization"/>
        </React.Fragment>
    );
};

export default Landing;
