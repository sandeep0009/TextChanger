import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from "./1.png";

const Header = () => {
  const [mode, setMode] = useState('light');

  const change = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.querySelectorAll('.summary').forEach((element) => {
        element.style.color = 'white'; 
      });
      document.querySelectorAll('.textchanger').forEach((element)=>{
        element.style.color='white'
      })
      document.querySelectorAll('.home').forEach((element)=>{
        element.style.color='white'
      })
     

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };


  return (
    <nav className={`navbar navbar-expand-lg bg-${mode}  `} >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TextChanger
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className='nav-item'>
            <img className='image' src={image1} alt=""  onClick={change}/>


            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
