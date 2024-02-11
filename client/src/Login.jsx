import React from "react";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg fullscreen">
      <NavigationBar />
      <div className="d-flex align-items-center justify-content-center">
        <form className="shadow-lg p-3 mb-5 bg-white rounded mt-5  w-50">
          <div className="form-group pt-2">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            
          </div>
          <div className="form-group pt-2">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
            <Link to='/register' >Create account</Link>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
