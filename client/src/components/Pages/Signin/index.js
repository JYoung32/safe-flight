//Sign-in component

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardBody, Container, Input, Form, FormGroup, Label } from "reactstrap";
import API from "../../../utils/API";

class SignIn extends React.Component {

    state = {
        email: "",
        password: ""
    }

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
        console.log("Submit button clicked");

        const payload = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(payload);
        API.loginUser(payload);

        //create route to access db and let user sign in

    };

    render() {
        return (
            <Container>
                <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <Card>
                            <CardBody>
                            <h1 className="text-center mb-3">
                                <FontAwesomeIcon icon="user" /> Sign In
                            </h1>
                            <Form>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email"
                                    id="email"
                                    name="email"
                                    className="form-control text-center"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.handleChange} 
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password"
                                    id="password"
                                    name="password"
                                    className="form-control text-center"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.handleChange} 
                                    ></Input>
                                </FormGroup>
                                <Button type="submit"
                                className="btn btn-primary btn-block mt-5"
                                onClick={this.handleSubmit}>
                                        Sign In
                                </Button>
                                </Form>
                                <p className="mx-auto mt-3 text-center">Need an account?<a href="/"> Register</a></p>
                                {/* <p className="mx-auto"> Need help?<a href="#"> Click here</a></p> */}
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Container>
        );
    }
}

export default SignIn;


