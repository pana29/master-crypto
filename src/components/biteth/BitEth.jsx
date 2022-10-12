import React, { useState, useEffect } from 'react';
import { getCoinsMarkets } from '../../services/apiSearchCoins/ApiSearchCoins';
import { useNavigate } from 'react-router-dom';
import bitc from '../../assets/bit.png';
import eth from '../../assets/eth.png';
import nft from '../../assets/nft.png';
import './../biteth/BitEth.css';

const BitEth = () => {
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMarketsCoins() {
      try {
        const res = await getCoinsMarkets({
          vs_currency: 'usd',
          order: 'market_cap_desc',
          page: 1,
          per_page: 250,
        });

        setData(res.data);
      } catch (error) {}
    }
    fetchMarketsCoins();
  }, []);

  const handleRedirect = (coinId) => {
    navigate(`/markets/${coinId}`);
  };

  const handleRedirectPage = () => {
    navigate(`/nft/`);
  };

  console.log(data);
  if (!data) return null;

  return (
    <div className="bit-eth">
      <div className="bit-eth-container">
        <div className="bit-eth-content">
          <h2 className="bit-eth-h2">
            Explore endless possibilities with MasterCrypto
          </h2>
          <p className="trust-p-bit">
            The possibility to choose crypto coins or NFT's
          </p>
          <div className="bit-eth-cards">
            <div className="margin-1">
            <div className="bit-eth-card1"
              onClick={() => handleRedirect(data[0].id)}
            >
              <img className="bitc-img1" src={bitc} alt="/" />
              <div className="info-text">
                <h2 className="trust-h2-1">BITCOIN</h2>
                <p className="card-p-bit">
                  Bitcoin is the first successful internet money based on
                  peer-to-peer technology; whereby no central bank or authority
                  is involved in the transaction and production of the Bitcoin
                  currency.
                </p>
                <p className="learn-more-card">Learn more</p>
              </div>
            </div>
            </div>
            <div className="margin-2">
            <div className="bit-eth-card2"
              onClick={() => handleRedirect(data[1].id)}
            >
              <div className="info-text">
                <h2 className="trust-h2-1">ETHEREUM</h2>
                <p className="card-p-bit">
                  Ethereum is a smart contract platform that enables developers
                  to build tokens and decentralized applications (dapps).
                </p>
                <p className="learn-more-card learn-2">Learn more</p>
              </div>
              <img className="eth-img" src={eth} alt="/" />
            </div>
            </div>
            <div className="margin-3">
            <div className="bit-eth-card3" onClick={() => handleRedirectPage()}>
              <img className="bitc-img2" src={nft} alt="/" />
              <div className="info-text">
                <h2 className="trust-h2-1">NFT</h2>
                <p className="card-p-bit">
                  Subscribe to NFT Calendar and stay tuned to the biggest
                  announcements.
                </p>
                <p className="learn-more-card">Learn more</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitEth;
