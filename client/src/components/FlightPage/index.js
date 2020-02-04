import React from "react";
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


class FlightPage extends React.Component {

    // state = {
    //     origin: "",
    //     destination: "",
    //     departure: "",
    //     return: ""

    // };
   
        constructor(props) {
            super(props);
            this.state = {value: '',
            origin: "",
            destination: "",
            departure: "",
            return: ""};
          
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }
          
        handleChange(event) {
            this.setState({
               origin: event.target.origin });
            }
    
        handleSubmit(event) {
            // alert('A name was submitted: ' + this.state.value);
             event.preventDefault();
              
            };

    render() {
        return (
            <div className="container mt-3">
                <Jumbotron>
                    <h1 className="display-3">Search for Flights</h1>
                    <hr className="my-2" />
                    <Form>
                        <FormGroup>
                            <Label for="OriginAirport">Origin</Label>
                            <Input type="text" name="email" id="originAirport" placeholder="Airport you are leaving from" value={this.state.origin} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="DestinationAirport">Destination</Label>
                            <Input type="text" name="email" id="destinationAirport" placeholder="Destination you are traveling to" />
                        </FormGroup>
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
                    <Button color="primary">Search Flights</Button>

                </Jumbotron>
            </div>
              
        );
      }
    }

export default FlightPage; 
