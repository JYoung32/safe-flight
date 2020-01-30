import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserLogin from "./components/Login"
import Navbar from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="container">
        <Route path="/" exact component={UserLogin} />
      </div>
    </Router>
  );
}

export default App;
