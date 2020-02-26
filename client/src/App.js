import React from 'react';
import '../src/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navigation";
import FlightPage from "./components/Pages/FlightPage";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faPlane, faPlaneArrival, faPlaneDeparture, faCalculator,faCalendarAlt, faUser, faIdCard, faHotel, faCarSide, faMoneyBillWave,faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import API from "./utils/API"
import HomePage from './components/Pages/HomePage';

library.add(faCheckSquare, faPlane, faPlaneArrival, faPlaneDeparture, faCalculator,faCalendarAlt, faUser, faIdCard, faHotel, faCarSide, faMoneyBillWave,faMapMarkedAlt)



function App() {
  localStorage.clear();
  
  API.validateToken(function(){
    console.log('Token Validation processed');
  })
  return (
    <Router>
      <Navbar />
        <Route path="/" exact component={HomePage} />
        <Route path="/flights" exact component={FlightPage} />
    </Router>
  );
}

export default App;
