import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Iq from './components/Iq';
import './App.css';

class App extends Component {
    render() {
        return (
        <Router>
            <Switch>
                <Route path="/iq/" component={Iq} />
            </Switch>
        </Router>
        );
    }
}

export default App;