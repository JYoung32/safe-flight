import React from "react";
<<<<<<< HEAD
import "./style.scss";
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { DateRangePicker } from 'react-dates';
import API from "../../../utils/API";
import FlightCard from "../../FlightCard"
=======
import { Jumbotron, Button, Form, FormGroup, Label, Input, Card, CardTitle, CardText, CardHeader, CardFooter, CardBody } from 'reactstrap';
import { DateRangePicker } from 'react-dates';
import API from "../../../utils/API";
import { Redirect } from 'react-router-dom';
>>>>>>> d58281bb5eff6cc5740875dcaaa9fcc1e530aa42

let moment = require('moment');
moment().format();

class FlightPage extends React.Component {

    state = {
        loggedIn: "",
        redirect: false,
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

<<<<<<< HEAD
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
=======
        // API.getHotel(payload.destination, payload.departure, payload.returnDate)
        // .then(res => {
        //     console.log(res);
        // })
        // .catch(() => {
        //     console.log('Error sending the payload to the server')
        // });

        API.getFlights(payload.origin, payload.destination, payload.departure, payload.returnDate)
        .then(data => {
            console.log(data);
            this.setState({
                flights: data.data
            });
            console.log(this.state.flights);
        })
        .catch(() => {
            console.log('Error sending the payload to the server')
        });;
>>>>>>> d58281bb5eff6cc5740875dcaaa9fcc1e530aa42
    };

    setRedirect = () => {
        console.log('redirect clicked');
        this.setState({
            redirect: true
        })
    };

    handleRedirect = () => {
        console.log('redirect clicked');
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    };

    componentDidMount() {
        const loggedIn = localStorage.getItem('login_token');
        this.setState({ loggedIn: loggedIn });
    }

    render() {

        if (!this.state.loggedIn) {
<<<<<<< HEAD
            return <div className="text-center">Not Logged In</div>
=======
            return ( 
                <div className="text-center container mt-3">
                    {this.handleRedirect()}
                    <Card>
                        <CardHeader tag="h3">You Are Not Logged In!</CardHeader>
                        <CardBody>
                            <CardText>If you would like to view our page, please click the button below to sign in or register.</CardText>
                            <CardText>Thank You!</CardText>
                            <Button onClick={this.setRedirect}>Register / Sign In</Button>
                        </CardBody>
                        <CardFooter className="text-muted">Destination Estimation</CardFooter>
                    </Card>
                </div> 
            )
>>>>>>> d58281bb5eff6cc5740875dcaaa9fcc1e530aa42
        }

        return (
            <div>

            <Jumbotron className="text-center jumbo">
                <div className="container col-12 text-center">
                    <h1 className="display-4">Choose Your Destination...</h1>
                    <hr className="my-2" />
                    <Form>
                        <div className="row m-2">
                            <FormGroup className="col-md formgroup">
                                <Label for="OriginAirport">Origin</Label>
                                <Input className="input"
                                    type="text"
                                    name="origin"
                                    id="originAirport"
                                    placeholder="Airport you are leaving from"
                                    value={this.state.origin}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup className="col-md formgroup" >
                                <Label for="DestinationAirport">Destination</Label>
                                <Input
                                    className="input"
                                    type="text"
                                    name="destination"
                                    id="destinationAirport"
                                    placeholder="Destination you are traveling to"
                                    value={this.state.destination}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </div>
<<<<<<< HEAD

                        <DateRangePicker className="calendar"
=======
                        
                        <DateRangePicker
>>>>>>> d58281bb5eff6cc5740875dcaaa9fcc1e530aa42
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
                </div>
            </Jumbotron>
            <FlightCard />
            </div>

            

        );
    };
};

export default FlightPage; 
