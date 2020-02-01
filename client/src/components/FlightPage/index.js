import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class FlightPage extends React.Component {
    
    state = {
        origin: "",
        destination: "",
        departure: "",
        return: ""

    };

    render() {
        return (
          <div className="contain fluid">
              <div className="row">
                 <div className="col-12 m-4">
                 <h1><FontAwesomeIcon icon="plane" />
                      Choose a Destination...</h1>
                        
                  
                  
                        
                 </div>
                 <div className= "col-6 mx-auto">
                <div className="btn btn-primary btn-block ">
                          Find Flights
                        </div>
                    </div>
                </div>
            </div>
              
        );
      }
    }

export default FlightPage; 
