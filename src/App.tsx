import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { Router, Route, Switch } from "react-router";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={About}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
