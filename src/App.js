import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Post from "./components/Post";
import Contact from "./components/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/:id" component={Post} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
