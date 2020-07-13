import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

import Navbar from "./components/Navbar"
import Home from "./contents/Home"
import About from "./contents/About"
import Experience from "./contents/Experience"
import Education from "./contents/Education"
import Skills from "./contents/Skills"
import Contact from "./contents/Contact"
import Resume from "./contents/Resume"
import Projects from "./contents/Projects"

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route> 
        <Route exact path="/resume">
          <Resume />
        </Route>  
        <Route exact path="/projects">
          <Projects />
        </Route>                      
      </div>
    </Router>
  );
}

export default App;
