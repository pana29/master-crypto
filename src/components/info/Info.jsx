import React from 'react';
import './../info/Info.css';
import { IoIosStats } from 'react-icons/io';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { MdOutlineSecurity } from 'react-icons/md';
import { ImMobile } from 'react-icons/im';
import coindd from '../../assets/wallet.jpg';

const Info = () => {
  return (
    <div className="photo-bg">
      <div className="info">
        <div className="container-i">
          <h2 className="title-h1">
            Create your cryptocurrency portfolio today
          </h2>
          <p className="title-p">
            MasterCrypto has a variety of features that make it the best place
            to start trading
          </p>
          <div className="content-i">
            <div className="info-container">
              <div className="info-left">
                <div className="il1">
                  <div className="icon-i">
                    <IoIosStats className="icon-i">icon</IoIosStats>
                  </div>
                  <div className="text-icon">
                    <h2 className="h2-slim">Manage your portfolio</h2>
                    <p className="p-slim">
                      Buy and sell popular digital currencies, keep track of
                      them in the one place.
                    </p>
                  </div>
                </div>
                <div className="il1">
                  <div className="icon-i">
                    <BsFillCalendar2CheckFill className="icon-i">
                      icon
                    </BsFillCalendar2CheckFill>
                  </div>
                  <div className="text-icon">
                    <h2 className="h2-slim">
                      Secure Asset Fund for Users (SAFU)
                    </h2>
                    <p className="p-slim">
                      MasterCrypto stores 10% of all trading fees in a secure
                      asset fund to protect a share of user funds.
                    </p>
                  </div>
                </div>
                <div className="il1">
                  <div className="icon-i">
                    <MdOutlineSecurity className="icon-i">
                      icon
                    </MdOutlineSecurity>
                  </div>
                  <div className="text-icon">
                    <h2 className="h2-slim">Personalised Access Control</h2>
                    <p className="p-slim">
                      Advanced access control allows you to restrict devices and
                      addresses that can access your account, for greater ease
                      of mind.
                    </p>
                  </div>
                </div>
                <div className="il1">
                  <div className="icon-i">
                    <ImMobile className="icon-i">icon</ImMobile>
                  </div>
                  <div className="text-icon">
                    <h2 className="h2-slim">Mobile apps</h2>
                    <p className="p-slim">
                      Stay on top of the markets with the MasterCrypto app for
                      Android or iOS.
                    </p>
                  </div>
                </div>
              </div>

              <div className="info-right">
                <img className="photo-info" src={coindd} alt="coinddd" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
