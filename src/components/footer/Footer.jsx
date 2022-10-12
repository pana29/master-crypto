import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col solutions">
          <h6 className="h6-text">About Us</h6>
          <ul className="hover-li">
            <li>
              <Link to="/" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div className="col legal">
          <h6 className="h6-text">Products</h6>
          <ul className="hover-li">
            <li>
              <Link to="/" className="link">
                Exchange
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Academy
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Cards
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                NFT
              </Link>
            </li>
          </ul>
        </div>
        <div className="col company">
          <h6 className="h66-text">Service</h6>
          <ul className="hover-li">
            <li>
              <Link to="/" className="link">
                Downloads
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Desktop Application
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Affiliate
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Referral
              </Link>
            </li>
          </ul>
        </div>
        <div className="col support">
          <h6 className="h666-text">Support</h6>
          <ul className="hover-li">
            <li>
              <Link to="/" className="link">
                Support Center
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Submit a request
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Fees
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                APIs{' '}
              </Link>
            </li>
          </ul>
        </div>

        <div className="col support-br">
          <h6 className="h6666-text">Community</h6>
          <ul className="logo-icons">
            <li>
              <Link to="/" className="link">
                {' '}
                <FaFacebook
                  className="alb"
                  size={20}
                  style={{ color: '#d3d3d3', marginRight: '10px' }}
                />
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                <FaInstagram
                  className="alb"
                  size={20}
                  style={{ color: '#d3d3d3', marginRight: '10px' }}
                />
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                <FaTwitter
                  className="alb"
                  size={20}
                  style={{ color: '#d3d3d3', marginRight: '10px' }}
                />
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                <FaGithub
                  className="alb"
                  size={20}
                  style={{ color: '#d3d3d3', marginRight: '10px' }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="line-f"></div>
      <div className="footer-bottom">
        <div className="content">
          <div className="rights">
            <p>
              <span className="master">MasterCrypto © 2022</span>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
