import React from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom"
import './App.css';

import Navbar from "./components/Navbar"
import Home from "./contents/Home"

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        
      </div>
    </Router>
  );
}

export default App;
