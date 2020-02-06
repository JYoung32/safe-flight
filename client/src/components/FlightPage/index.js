import React from "react";
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import API from "../../utils/API";
import axios from 'axios';


class FlightPage extends React.Component {

    state = {
        origin: "",
        destination: "",
        departure: "",
        return: "",
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
            destination: this.state.destination
        };
        //console.log(payload);

    //     API.getFlights(origin, destination, departure)
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(() => {
    //             console.log('Error sending the payload to the server')
    //         });;

        API.testFlights()
            .then(res => {
                console.log(res.data);
            })
            .catch(() => {
                console.log('Error sending the payload to the server')
            });;


    };
    render() {
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
    }
};

export default FlightPage; 
