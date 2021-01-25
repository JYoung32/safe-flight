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

  newFlightInfo = () => {
    console.log(this.props)
    console.log(this.props.flight.itineraries[0].segments[0].departure.iataCode)
  }

  // objDectructure = () => {
  //   let flight = this.props.flight.offerItems[0];

  //   let time1 = flight.services[0].segments[0].flightSegment.departure.at;
  //   let time2 = flight.services[0].segments[0].flightSegment.arrival.at;
  //   let time3 = flight.services[1].segments[0].flightSegment.departure.at;
  //   let time4 = flight.services[1].segments[0].flightSegment.arrival.at;

  //   let newTime1 = time1.slice(11,19);
  //   let newTime2 = time2.slice(11,19);
  //   let newTime3 = time3.slice(11,19);
  //   let newTime4 = time4.slice(11,19);

  //   this.setState({ 
  //     price: flight.price, 
  //     service: flight.services,
  //     outboundFlightInfo: flight.services[0].segments[0].flightSegment,
  //     inboundFlightInfo: flight.services[1].segments[0].flightSegment,
  //     outboundFlightTakeoff: flight.services[0].segments[0].flightSegment.departure,
  //     outboundTakeoffTime: newTime1,
  //     outboundFlightLanding: flight.services[0].segments[0].flightSegment.arrival,
  //     outboundLandingTime: newTime2,
  //     inboundFlightTakeoff: flight.services[1].segments[0].flightSegment.departure,
  //     inboundTakeoffTime: newTime3,
  //     inboundFlightLanding: flight.services[1].segments[0].flightSegment.arrival,
  //     inboundLandingTime: newTime4
  //   });

  //   console.log(flight);

  //   console.log(flight.services);

  //   console.log(flight.services[0].segments[0].flightSegment);

  //   console.log(flight.services[0].segments[0].flightSegment.departure.at);

  //   let time = flight.services[0].segments[0].flightSegment.departure.at;
  //   let newTime = time.slice(11, 19);

  //   console.log(newTime1, newTime2, newTime3, newTime4);

  // }

  componentDidMount() {
    this.newFlightInfo();
  }

  render() {
    return (
      <div>
        <Card className="flightCard animated slideInRight m-4">
          {/* <CardHeader className= "cardhead text-center"></CardHeader> */}
            <CardBody className="cardbody">
              <CardTitle className="title">
                <FontAwesomeIcon className= "fa-icon" icon="plane-departure" />
                DEPARTING Flight: {this.props.flight.itineraries[0].segments[0].carrierCode} {this.props.flight.itineraries[0].segments[0].number}</CardTitle>
                <CardText className="departing">Departing from: {this.props.flight.itineraries[0].segments[0].departure.iataCode} at {this.props.flight.itineraries[0].segments[0].departure.at}</CardText>
                <CardText className="arriving">Arriving at: {this.props.flight.itineraries[0].segments[0].arrival.iataCode} at {this.props.flight.itineraries[0].segments[0].arrival.at}</CardText> 
              <hr></hr>
              <CardTitle className="title">
              <FontAwesomeIcon className= "fa-icon" icon="plane-arrival" />
              RETURNING Flight: {this.props.flight.itineraries[1].segments[0].carrierCode} {this.props.flight.itineraries[1].segments[0].number}</CardTitle>
                <CardText className="departing">Departing from: {this.props.flight.itineraries[1].segments[0].departure.iataCode} at {this.props.flight.itineraries[1].segments[0].departure.at}</CardText>
                <CardText className="arriving">Arriving at: {this.props.flight.itineraries[1].segments[0].arrival.iataCode} at {this.props.flight.itineraries[1].segments[0].arrival.at}</CardText>
              <hr></hr>
                <CardText className="dollar">
                  <FontAwesomeIcon className="fa-icon" icon="money-bill-wave" />
                Price: ${this.props.flight.price.total} {this.props.flight.price.currency}</CardText>
            </CardBody>
          {/* <CardFooter className="text-center">Safe Flights</CardFooter>  //probably dont need this footer */}
        </Card>
      </div>
    );
  }
}

export default FlightCard;
