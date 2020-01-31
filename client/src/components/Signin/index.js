//Sign-in component

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SignIn() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <div className="card card-body mb-4">
                        <h1 className="text-center mb-3">
                            <FontAwesomeIcon icon="user" /> Sign In
                        </h1>


                        <form action="/users/register" method="POST">
                            <div className="form-group">
                                <label for="username">Username</label>
                                <input type="username" id="username" name="username" className="form-control" placeholder="jjog" value="" />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" className="form-control" placeholder="********" value="" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mt-5">
                                Sign In
                            </button>
                        </form>
                        <p className="mx-auto mt-3">Need an account?<a href="/"> Register</a></p>
                        <p className="mx-auto"> Need help?<a href="#"> Click here</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;


