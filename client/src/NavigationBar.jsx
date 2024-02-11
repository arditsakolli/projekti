import React, { useState } from 'react';
import foto from './assets/foto.png'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white  borderB">
    <div className="container">
      <div className="navbar-left">
        <img className='foto' src={foto} alt="Logo"></img>
        {/* <h1 onClick={handleToggle} className='coolorr '>Green Transition</h1> */}
      </div>
      <form class="form-inline my-2 my-lg-0 d-flex">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      <div className={`navbar-right ${isOpen ? 'active' : ''}`}> 
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to='/' href="#" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/dashboard' href="#" className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <Link to='/createproject' href="#" className="nav-link">Create Product</Link>
          </li>
          <li className="nav-item">
            <Link to='/login' href="#" className="nav-link btn">Log-In</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  
  );
};

export default NavigationBar;
