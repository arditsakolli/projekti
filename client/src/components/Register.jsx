import React from 'react'
import { Link } from 'react-router-dom'
import NavigationBar from '../NavigationBar'
function Register() {
  return (
    <div className='bg fullscreen'>
        <NavigationBar/>
        <div className="d-flex align-items-center justify-content-center ">
        <form className="shadow-lg p-3 mb-5 bg-white rounded mt-5 w-50">
        <div className="form-group">
            <label for="Name">Name</label>
            <input
              type="text"
              className="form-control"
              id="Name"
              placeholder="Name"
            />
            
          </div>
          <div className="form-group mt-3">
            <label for="Last">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="Last"
              placeholder="Last Name"
            />
            
          </div>
          <div className="form-group mt-3">
            <label for="Email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="Email"
              placeholder="Enter email"
            />
            
          </div>
          <div className="form-group mt-3">
            <label for="Password">Password</label>
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
            <label for="Password">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
            />
          </div>
          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
            <Link to='/login' >Log in</Link>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register