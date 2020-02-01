//Login component

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Login() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <div className="card card-body mb-4">
                        <h1 className="text-center mb-3">
                        <FontAwesomeIcon icon="id-card" /> Register
                        </h1>


                        <form  action="/users/register" method="POST">
                            <div className="form-group">
                                <label for="name">Full Name</label>
                                <input type="name" id="name" name="name" className="form-control" placeholder="Joseph Elder" value="" />
                            </div>
                            <div className="form-group">
                                <label for="username">Username</label>
                                <input type="username" id="username" name="username" className="form-control" placeholder="JumbotronJoey" value="" />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" className="form-control" placeholder="Create Password" value="" />
                            </div>
                            <div className="form-group">
                                <label for="password2">Confirm Password</label>
                                <input type="password" id="password2" name="password2" className="form-control" placeholder="********" value="" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mt-5">
                                Register
              </button></form>
                            <p className="mx-auto mt-3">Already have an account? <a href="/users/login">Login</a></p>
                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;


