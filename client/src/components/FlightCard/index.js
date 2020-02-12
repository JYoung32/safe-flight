import React from "react";
import "./style.scss";
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FlightCard extends React.Component {
  state = {
    price: "",
    service: [],
    outboundFlightInfo: [],
    inboundFlightInfo: [],
    outboundFlightTakeoff: [],
    outboundTakeoffTime: "",
    outboundFlightLanding: [],
    outboundLandingTime: "",
    inboundFlightTakeoff: [],
    inboundTakeoffTime: "",
    inboundFlightLanding: [],
    inboundLandingTime: ""    
  }

  objDectructure = () => {
    let flight = this.props.flight.offerItems[0];

    let time1 = flight.services[0].segments[0].flightSegment.departure.at;
    let time2 = flight.services[0].segments[0].flightSegment.arrival.at;
    let time3 = flight.services[1].segments[0].flightSegment.departure.at;
    let time4 = flight.services[1].segments[0].flightSegment.arrival.at;

    let newTime1 = time1.slice(11,19);
    let newTime2 = time2.slice(11,19);
    let newTime3 = time3.slice(11,19);
    let newTime4 = time4.slice(11,19);

    this.setState({ 
      price: flight.price, 
      service: flight.services,
      outboundFlightInfo: flight.services[0].segments[0].flightSegment,
      inboundFlightInfo: flight.services[1].segments[0].flightSegment,
      outboundFlightTakeoff: flight.services[0].segments[0].flightSegment.departure,
      outboundTakeoffTime: newTime1,
      outboundFlightLanding: flight.services[0].segments[0].flightSegment.arrival,
      outboundLandingTime: newTime2,
      inboundFlightTakeoff: flight.services[1].segments[0].flightSegment.departure,
      inboundTakeoffTime: newTime3,
      inboundFlightLanding: flight.services[1].segments[0].flightSegment.arrival,
      inboundLandingTime: newTime4
    });

    console.log(flight);

    console.log(flight.services);

    console.log(flight.services[0].segments[0].flightSegment);

    console.log(flight.services[0].segments[0].flightSegment.departure.at);

    let time = flight.services[0].segments[0].flightSegment.departure.at;
    let newTime = time.slice(11, 19);

    console.log(newTime1, newTime2, newTime3, newTime4);

  }

  componentDidMount() {
    this.objDectructure();
  }

  render() {
    return (
      <div>
        <Card className="flightCard m-4">
          {/* <CardHeader className= "cardhead text-center"></CardHeader> */}
            <CardBody className="cardbody">
              <CardTitle className="title">
                <FontAwesomeIcon icon="plane-departure" />
                DEPARTING Flight: {this.state.outboundFlightInfo.carrierCode} {this.state.outboundFlightInfo.number}</CardTitle>
                <CardText className="departing">Departing from: {this.state.outboundFlightTakeoff.iataCode} at {this.state.outboundTakeoffTime}</CardText>
                <CardText className="arriving">Arriving at: {this.state.outboundFlightLanding.iataCode} at {this.state.outboundLandingTime}</CardText> 
              <hr></hr>
              <CardTitle className="title">
              <FontAwesomeIcon icon="plane-arrival" />
              RETURNING Flight: {this.state.inboundFlightInfo.carrierCode} {this.state.inboundFlightInfo.number}</CardTitle>
                <CardText className="departing">Departing from: {this.state.inboundFlightTakeoff.iataCode} at {this.state.inboundTakeoffTime}</CardText>
                <CardText className="arriving">Arriving at: {this.state.inboundFlightLanding.iataCode} at {this.state.inboundLandingTime}</CardText>
              <hr></hr>
                <CardText className="dollar">
                  <FontAwesomeIcon className="m-4" icon="money-bill-wave" />
                Price: $ {this.state.price.total}</CardText>
            </CardBody>
          {/* <CardFooter className="text-center">Safe Flights</CardFooter>  //probably dont need this footer */}
        </Card>
      </div>
    );
  }
}

export default FlightCard;
