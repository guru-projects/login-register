import React from "react";

const Login = () => {

    return (
        <div className="flex justify-center content-center items-center bg-primary h-screen">
            <div className=" bg-white p-3 w-96 rounded h-auto m-2.5">
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input type="password" placeholder="Enter Email" className="form-control" autocomplete="new-password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input type="password" id="password" placeholder="Enter Password" className="form-control" autocomplete="new-password" />
                        </div>
                    <button className="btn btn-success w-100">Login</button>
                    <p>Agree to out terms and condotions</p>
                    <button className="btn btn-default border w-100 bg-light">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;

