import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Iq from './components/Iq';
import Music from './components/Music';
import Language from './components/Language';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import TestTriNho from './components/Memory';
import Testposition from './components/Position';
import MatchingTest from './components/Commont'
import './css/bootstrap.min.css'
import Creative from './components/Creative';
import Diff from './components/Diff';
import { withCookies  } from 'react-cookie';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="wrap">
            <img src='./images/bg-02.png' alt=""/>
            <Header></Header>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/iq" component={Iq} />
              <Route path="/music" component={Music} />
              <Route path="/language" component={Language} />
              <Route path="/position" component={Testposition} />
              <Route path="/memory" component={TestTriNho} />
              <Route path="/creative" component={Creative} />
              <Route path="/common" component={MatchingTest} />
              <Route path="/difference" component={Diff} />
            </Switch>
            <Footer></Footer>
          </div>
      </Router>
    );
  }
}

export default withCookies(App);
