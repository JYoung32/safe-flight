import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateUser from "./components/Login"
import Navbar from "./components/Navigation/Navbar.js";
import SignIn from "./components/Signin"

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="container">
        <Route path="/" exact component={CreateUser} />
        <Route path="/users/login" exact component={SignIn} />
      </div>
    </Router>
  );
}

export default App;
