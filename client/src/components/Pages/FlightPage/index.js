import React from "react";
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { DateRangePicker } from 'react-dates';
import API from "../../../utils/API";

let moment = require('moment');
moment().format();



class FlightPage extends React.Component {

    state = {
        loggedIn: "",
        origin: "",
        destination: "",
        departure: "",
        returnDate: "",
        flights: []
    };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });

    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("hello handle submit click");
        //payload of the flight info entered
        const payload = {
            origin: this.state.origin,
            destination: this.state.destination,
            departure: this.state.startDate.format("YYYY-MM-DD"),
            returnDate: this.state.endDate.format("YYYY-MM-DD")
        };
        console.log(payload);

        API.getHotel(payload.destination, payload.departure, payload.returnDate)
        .then(res => {
            console.log(res);
        })
        .catch(() => {
            console.log('Error sending the payload to the server')
        });

        API.getFlights(payload.origin, payload.destination, payload.departure, payload.returnDate)
        .then(res => {
            console.log(res);
        })
        .catch(() => {
            console.log('Error sending the payload to the server')
        });;
    };

    componentDidMount() {
       const loggedIn = localStorage.getItem('login_token');
       this.setState({ loggedIn: loggedIn }); 
    }
    
    render() {

        if( !this.state.loggedIn ) {
            return <div className="text-center">Not Logged In</div>
        }

        return (
            <div className="container">
                <Jumbotron className="mt-3 text-center">
                    <h1 className="display-3">Search for Flights</h1>
                    <hr className="my-2" />
                    <Form>
                        <div className="row">
                            <FormGroup className="col-md">
                                <Label for="OriginAirport">Origin</Label>
                                <Input
                                    type="text"
                                    name="origin"
                                    id="originAirport"
                                    placeholder="Airport you are leaving from"
                                    value={this.state.origin}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup className="col-md" >
                                <Label for="DestinationAirport">Destination</Label>
                                <Input
                                    type="text"
                                    name="destination"
                                    id="destinationAirport"
                                    placeholder="Destination you are traveling to"
                                    value={this.state.destination}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </div>

                        <DateRangePicker
                            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        />
                    </Form>
                    <Button
                        onClick={this.handleSubmit}
                        className="m-3"
                        color="primary">
                        Search Flights
                    </Button>

                </Jumbotron>

            </div>

        );
    };
};

export default FlightPage; 