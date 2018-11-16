import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Minesweeper from "./Minesweeper";

const App = () => (
  <HashRouter>
    <Minesweeper />
  </HashRouter>
);

export default App;
