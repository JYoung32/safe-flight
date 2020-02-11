import React from "react";
import "./style.css";
import "./style.scss";
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';


const FlightCard = (props) => {
    return (
      <div>
        <Card className="card">
          <CardHeader className= "cardhead">Flight Name</CardHeader>
          <CardBody className="cardbody">
            <CardTitle>American Airlines</CardTitle>
            <CardText>Any specific details we can pull from the API</CardText>
            <Button>Save this flight</Button>
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        </div>
    );
};

export default FlightCard;
