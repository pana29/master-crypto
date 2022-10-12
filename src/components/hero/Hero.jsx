import React from 'react';
import imgHero from '../../assets/123.jpg';
import '..//hero/Hero.css';


const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h1>
            View 500+ <span className="blue">cryptocurrencies </span>on
            MasterCrypto{' '}
          </h1>
          <p>
            Buy, sell & swap the cryptocurrencies you want anytime, anywhere.
          </p>
          <p>Sign up and get started today.</p>
          {/* <div className="input-container">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn">Get Started</button>
                    </div> */}
        </div>

        <div className="img-h">
          <img className="img-hero" src={imgHero} alt="" />
        </div>
      </div>
      <div className="blue-line">
        <section className="blue-section">
          <div className="blue-container">
            <div className="blue1">
              <div className="blue-info">$120B</div>
              <div className="blue-info-down">Quarterly volume trade</div>
            </div>
            <div className="blue1">
              <div className="blue-info">100+</div>
              <div className="blue-info-down">Countries supported</div>
            </div>
            <div className="blue1">
              <div className="blue-info">35M+</div>
              <div className="blue-info-down">Verified users</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
