import React from 'react';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import '../marketsCoin/MarketsCoin.css';

const MarketsCoin = ({
  id,
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcup,
  sparkline_in_7d,
}) => {
  return (
    <div className="container-coin">
      <div className="coin-row">
        <Link to={`/markets/${id}`}>
          <div className="coin">
            <div className="img-mk">
              <img src={image} alt="crypto"/>
            </div>
            <div className="ant-d">
              <h1>{name}</h1>
              <p className="coin-symbol">{symbol}</p>
            </div>
          </div>
        </Link>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume?.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange?.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange?.toFixed(2)}%</p>
          )}
          <p className="coin-market-cup">${marketcup?.toLocaleString()}</p>
          <Sparklines className='sparkline-mrk' style={{ width: '100px'}} data={sparkline_in_7d}>
            <SparklinesLine className='sparkline-mrk' color="teal" />
          </Sparklines>
        </div>
      </div>
    </div>
  );
};

export default MarketsCoin;
