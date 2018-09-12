import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import "./scss/main.scss";

import Landing from './src/views/landing.js';
import Error404 from './src/views/404.js';

const test = () => {
    return (
        <div>Hello</div>
    );
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route name="landing" exact path='/' component={Landing} />
                        <Route name="about" path='/about' component={test} />
                        <Route name="bootcamps" path='/bootcamps' component={Landing} />
                        <Route name="competitions" path='/competitions' component={Landing} />
                        <Route name="awards" path='/awards' component={Landing} />
                        <Route path="*" component={Error404} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
