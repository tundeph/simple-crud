import "./App.css";
import React from "react";
import Home from "./Home";
import Display from "./Display";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/add" component={Home} />
      <Route exact path="/show" component={Display} />
    </div>
  );
}

export default App;
