import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMix } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import '..//navbar/Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">
          <div className="logo">
            <FaMix className="icon" />
            <h1>MasterCrypto</h1>
          </div>
        </Link>

        <div className="hamburger" onClick={handleNav}>
          {!nav ? (
            <FaBars className="icon" />
          ) : (
            <FaTimes className="icon" style={{ color: 'white' }} />
          )}
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu '}>
          <li>
            <Link  onClick={handleNav} to="/">Home</Link>
          </li>
          <li>
            <Link  onClick={handleNav} to="/markets">Markets</Link>
          </li>
          <li>
            <Link  onClick={handleNav} to="/news">News</Link>
          </li>
          <li>
            <Link  onClick={handleNav} to="/nft">NFT</Link>
          </li>
          {/* <li className='sign'>Log In</li>
            <button>Register</button> */}
        </ul>

      
      </div>
    </div>
  );
};

export default Navbar;
