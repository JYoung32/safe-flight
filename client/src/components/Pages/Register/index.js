//Login component

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardBody, Container, Input, Form, FormGroup, Label } from 'reactstrap';

class Register extends React.Component {

    state = {
        fullName: "",
        email: "",
        password: ""
    };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    };

    //make if statement to check confirm PW against PW to then submit
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit button clicked");
        //payload need password
        const payload = {
            fullName: this.state.fullName,
            email: this.state.email,
        };
        console.log(payload);
    }


    render() {
        return (
            <Container>
                <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <Card>
                            <CardBody>
                                <h1 className="text-center mb-3">
                                    <FontAwesomeIcon icon="id-card" /> Register
                            </h1>


                                <Form className="text-center">
                                    <FormGroup>
                                        <Label for="fullName">Full Name</Label>
                                        <Input type="text" 
                                        id="fullName" 
                                        name="fullName" className="form-control text-center" placeholder="Full Name"
                                        value={this.state.fullName}
                                        onChange={this.handleChange}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email Address</Label>
                                        <Input type="email" id="email" name="email" className="form-control text-center" placeholder="Email address"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" id="password" name="password" className="form-control text-center" placeholder="Create Password"
                                        //value=""
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password2">Confirm Password</Label>
                                        <Input type="password" id="password2" name="password2" className="form-control text-center" placeholder="Confirm Password"
                                        //value="" 
                                        ></Input>
                                    </FormGroup>
                                    <Button type="submit" className="btn btn-primary btn-block mt-5"
                                    onClick={this.handleSubmit}>
                                        Register
                                    </Button>
                                </Form>
                                <p className="mx-auto mt-3 text-center">Already have an account? <a href="/users/login">Login</a></p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Container>
        );
    }
};

export default Register;


