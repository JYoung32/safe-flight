//Sign-in component

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardBody, Container, Input, Form, FormGroup, Label } from "reactstrap";

class SignIn extends React.Component {

    state = {

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
    
    
                                <Form action="/users/register" method="POST">
                                    <FormGroup>
                                        <Label for="username">Username</Label>
                                        <Input type="username" id="username" name="username" className="form-control" placeholder="jjog"
                                        //value="" 
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" id="password" name="password" className="form-control" placeholder="********"
                                        //value="" 
                                        ></Input>
                                    </FormGroup>
                                    <Button type="submit" className="btn btn-primary btn-block mt-5">
                                        Sign In
                                </Button>
                                </Form>
                                <p className="mx-auto mt-3">Need an account?<a href="/"> Register</a></p>
                                <p className="mx-auto"> Need help?<a href="#"> Click here</a></p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Container>
        );
    }
}

export default SignIn;


