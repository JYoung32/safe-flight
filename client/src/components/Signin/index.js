//Login component

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function SignIn() {
    return (
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-6 m-auto">
                    <div class="card card-body">
                        <h1 class="text-center mb-3">
                            <i class="fas fa-user-plus"></i> Sign In
                        </h1>


                        <form action="/users/register" method="POST">
                            <div class="form-group">
                                <label for="username">UserName</label>
                                <input type="username" id="username" name="username" class="form-control" placeholder="Enter Username" value="" />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" class="form-control" placeholder="Create Password" value="" />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">
                                Register
                            </button>
                        </form>
                        <p class="lead mt-4">Already have an account! <a href="/users/login">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;


