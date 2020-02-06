import React from 'react';



class FlightDynamic extends React.Component {
    constructor() {
        super();
        this.state = {
            'apiFlights': []
        }
    }
    componentDidMount() {
        this.getFlights();
    }

    getFlights() {
        fetch('http://localhost:3000/api/flights')
            .then(results => results.json())
            .then(results => this.setState({ 'apiFlights': results }));

    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                
            </div>
        )
    }
}

export default FlightDynamic;