import React, { useState, useEffect } from 'react';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import { getCoinsMarkets } from '../../services/apiSearchCoins/ApiSearchCoins';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../featured/Featured.css';

const Featured = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMarketsCoins() {
      try {
        const res = await getCoinsMarkets({
          vs_currency: 'usd',
          order: 'market_cap_desc',
          page: 1,
          per_page: 10,
        });
        setData(res.data);
      } catch (error) {}
    }
    fetchMarketsCoins();
  }, []);

  console.log(data);
  if (!data) return null;
  const handleRedirect = (coinId) => {
    navigate(`/markets/${coinId}`);
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h2 className="h2-left">
            Explore top Crypto's Like <br></br> Bitcoin, Ethereum, and Solana
          </h2>
          <p>See all available assets: Cryptocurrencies and NFT's.</p>
          <Link to="/markets">
            <button className="btn">See More Coins</button>
          </Link>
        </div>
        <div className="top-coin-tbl">
          <div className="container-coin-tbl">
            <div className="head-coin-tbl">
              <h3 className="info-head name-info-head">Name</h3>
              <h3 className="info-head last-price">Last Price</h3>
              <h3 className="info-head">1h Change</h3>
            </div>
            <div className="top-coin-in-tbl"  onClick={() => handleRedirect(data[0].id)}>
            <div className="first-coin-tbl">
            <img className="img-tbl" src={data[0].image} alt="/"></img>
                    {data[0]?.name}
            </div>
            <div className="price-coin-tbl">
            ${data[0].current_price.toLocaleString()}
            </div>
            <div className="1h-coin-tbl">
            {data[0].price_change_percentage_24h < 0 ? (
                      <span className="red">
                        <FiArrowDown className="icon" />
                        {data[0].price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />
                        {data[0].price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}
            </div>
            </div>
            <div className="top-coin-in-tbl"  onClick={() => handleRedirect(data[1].id)}>
            <div className="first-coin-tbl">
            <img className="img-tbl" src={data[1].image} alt="/"></img>
                    {data[1]?.name}
            </div>
            <div className="price-coin-tbl pr-2">
            ${data[1].current_price.toLocaleString()}
            </div>
            <div className="1h-coin-tbl">
            {data[1].price_change_percentage_24h < 0 ? (
                      <span className="red">
                        <FiArrowDown className="icon" />
                        {data[1].price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />
                        {data[1].price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}
            </div>
            </div>
            <div className="top-coin-in-tbl"  onClick={() => handleRedirect(data[2].id)}>
            <div className="first-coin-tbl">
            <img className="img-tbl" src={data[2].image} alt="/"></img>
                    {data[2]?.name}
            </div>
            <div className="price-coin-tbl pr-3">
            ${data[2].current_price.toLocaleString()}
            </div>
            <div className="1h-coin-tbl">
            {data[2].price_change_percentage_24h < 0 ? (
                      <span className="red">
                        <FiArrowDown className="icon" />
                        {data[2].price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />
                        {data[2].price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}
            </div>
            </div>
            <div className="top-coin-in-tbl"  onClick={() => handleRedirect(data[3].id)}>
            <div className="first-coin-tbl">
            <img className="img-tbl" src={data[3].image} alt="/"></img>
                    {data[3]?.name}
            </div>
            <div className="price-coin-tbl pr-4">
            ${data[3].current_price.toLocaleString()}
            </div>
            <div className="1h-coin-tbl">
            {data[3].price_change_percentage_24h < 0 ? (
                      <span className="red">
                        <FiArrowDown className="icon" />
                        {data[3].price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />
                        {data[3].price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}
            </div>
            </div>
            <div className="top-coin-in-tbl"  onClick={() => handleRedirect(data[4].id)}>
            <div className="first-coin-tbl">
            <img className="img-tbl" src={data[4].image} alt="/"></img>
                    {data[4]?.name}
            </div>
            <div className="price-coin-tbl pr-5">
            ${data[4].current_price.toLocaleString()}
            </div>
            <div className="1h-coin-tbl">
            {data[4].price_change_percentage_24h < 0 ? (
                      <span className="red">
                        <FiArrowDown className="icon" />
                        {data[4].price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />
                        {data[4].price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}
            </div>
            </div>
            <div className="top-coin-in-tbl"  onClick={() => handleRedirect(data[5].id)}>
            <div className="first-coin-tbl">
            <img className="img-tbl" src={data[5].image} alt="/"></img>
                    {data[5]?.name}
            </div>
            <div className="price-coin-tbl pr-6">
            ${data[5].current_price.toLocaleString()}
            </div>
            <div className="1h-coin-tbl">
            {data[5].price_change_percentage_24h < 0 ? (
                      <span className="red">
                        <FiArrowDown className="icon" />
                        {data[5].price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />
                        {data[5].price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}
            </div>
            </div>
            

          </div>
        </div>
        {/* <table className="table-f">  
            <thead className="thead-class border-f">
              <tr className="border-h">
                <th className="col-e">#</th>
                <th className="col-g">Coin</th>
                <th className="col-f">Price</th>
                <th className="col-h">1h</th>
              </tr>
            </thead>
          <div className="body-f">
            <tbody className="tbody-class body-f">
              <tr
                className="border-bd"
                onClick={() => handleRedirect(data[0].id)}
              >
                <th className="row-f">1</th>
                <td>
                  <div className="name-coin">
                    <img className="img-tbl" src={data[0].image} alt="/"></img>
                    {data[0]?.name}
                  </div>
                </td>
                <td className="price-table" style={{ color: '#474D57' }}>
                  ${data[0].current_price.toLocaleString()}
                </td>
                <td>
                  <div className="price-f">
                    {data[0].price_change_percentage_24h < 0 ? (
                      <span className="red">
                        <FiArrowDown className="icon" />
                        {data[0].price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />
                        {data[0].price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}
                  </div>
                </td>
              </tr>
              <tr
                className="border-bd"
                onClick={() => handleRedirect(data[1].id)}
              >
                <th className="row-f">2</th>
                <td>
                  <div className="name-coin">
                    <img className="img-tbl" src={data[1].image} alt="/"></img>
                    {data[1]?.name}
                  </div>
                </td>
                <td className="price-table" style={{ color: '#474D57' }}>
                  ${data[1].current_price.toLocaleString()}
                </td>
                <td>
                  <div className="price-f">
                    {data[1].price_change_percentage_24h < 0 ? (
                      <span className="red">
                        <FiArrowDown className="icon" />
                        {data[1].price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />
                        {data[1].price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}
                  </div>
                </td>
              </tr>
              <tr
                className="border-bd"
                onClick={() => handleRedirect(data[2].id)}
              >
                <th className="row-f">3</th>
                <td>
                  <div className="name-coin">
                    <img className="img-tbl" src={data[2].image} alt="/"></img>
                    {data[2]?.name}
                  </div>
                </td>
                <td className="price-table" style={{ color: '#474D57' }}>
                  ${data[0].current_price.toLocaleString()}
                </td>
                <td>
                  <div className="price-f">
                    {data[2].price_change_percentage_24h < 0 ? (
                      <span className="red">
                        <FiArrowDown className="icon" />
                        {data[2].price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />
                        {data[2].price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}
                  </div>
                </td>
              </tr>
              <tr
                className="border-bd"
                onClick={() => handleRedirect(data[3].id)}
              >
                <th className="row-f">4</th>
                <td>
                  <div className="name-coin">
                    <img className="img-tbl" src={data[3].image} alt="/"></img>
                    {data[3]?.name}
                  </div>
                </td>
                <td className="price-table" style={{ color: '#474D57' }}>
                  ${data[3].current_price.toLocaleString()}
                </td>
                <td>
                  <div className="price-f">
                    {data[3].price_change_percentage_24h < 0 ? (
                      <span className="red">
                        <FiArrowDown className="icon" />
                        {data[3].price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />
                        {data[3].price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}
                  </div>
                </td>
              </tr>
              <tr
                className="border-bd"
                onClick={() => handleRedirect(data[4].id)}
              >
                <th className="row-f">5</th>
                <td>
                  <div className="name-coin">
                    <img className="img-tbl" src={data[4].image} alt="/"></img>
                    {data[4]?.name}
                  </div>
                </td>
                <td className="price-table" style={{ color: '#474D57' }}>
                  ${data[4].current_price.toLocaleString()}
                </td>
                <td>
                  <div className="price-f">
                    {data[4].price_change_percentage_24h < 0 ? (
                      <span className="red">
                        <FiArrowDown className="icon" />
                        {data[4].price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />
                        {data[4].price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}
                  </div>
                </td>
              </tr>
              <tr
                className="border-bd"
                onClick={() => handleRedirect(data[5].id)}
              >
                <th className="row-f">6</th>
                <td>
                  <div className="name-coin">
                    <img className="img-tbl" src={data[5].image} alt="/"></img>
                    {data[5]?.name}
                  </div>
                </td>
                <td className="price-table" style={{ color: '#474D57' }}>
                  ${data[5].current_price.toLocaleString()}
                </td>
                <td>
                  <div className="price-f">
                    {data[5].price_change_percentage_24h < 0 ? (
                      <span className="red">
                        <FiArrowDown className="icon" />
                        {data[5].price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />
                        {data[5].price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}
                  </div>
                </td>
              </tr>
              <tr
                className="border-bd"
                onClick={() => handleRedirect(data[6].id)}
              >
                <th className="row-f">7</th>
                <td>
                  <div className="name-coin">
                    <img className="img-tbl" src={data[6].image} alt="/"></img>
                    {data[6]?.name}
                  </div>
                </td>
                <td className="price-table" style={{ color: '#474D57' }}>
                  ${data[6].current_price.toLocaleString()}
                </td>
                <td>
                  <div className="price-f">
                    {data[6].price_change_percentage_24h < 0 ? (
                      <span className="red">
                        <FiArrowDown className="icon" />
                        {data[6].price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />
                        {data[6].price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}
                  </div>
                </td>
              </tr>
              <tr
                className="border-bd"
                onClick={() => handleRedirect(data[7].id)}
              >
                <th className="row-f">8</th>
                <td>
                  <div className="name-coin">
                    <img className="img-tbl" src={data[7].image} alt="/"></img>
                    {data[7]?.name}
                  </div>
                </td>
                <td className="price-table" style={{ color: '#474D57' }}>
                  ${data[7].current_price.toLocaleString()}
                </td>
                <td>
                  <div className="price-f">
                    {data[7].price_change_percentage_24h < 0 ? (
                      <span className="red">
                        <FiArrowDown className="icon" />
                        {data[7].price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />
                        {data[7].price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </div>
        </table> */}
      </div>
    </div>
  );
};

export default Featured;
