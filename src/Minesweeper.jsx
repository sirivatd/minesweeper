import React from "react";
import { Route, Switch } from "react-router-dom";
import MinesweeperGame from "./components/minesweeper_game";

const Minesweeper = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    <Switch>
      <Route exact path="/minesweeper" component={MinesweeperGame} />
    </Switch>
    <footer className="App-footer">
      <p>Made by Don Sirivat</p>
    </footer>
  </div>
);

export default Minesweeper;
