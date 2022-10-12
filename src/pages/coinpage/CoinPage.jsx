import React, { useState, useEffect } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import { getCoinById } from '../../services/apiSearchCoins/ApiSearchCoins';
import ClipLoader from 'react-spinners/ClipLoader';
import '../coinpage/CoinPage.css';

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('ffffff');

  useEffect(() => {
    async function fetchMarketsCoins() {
      setLoading(true);
      try {
        const res = await getCoinById(params.coinId, {
          location: false,
          sparkline: true,
        });
        console.log(res);
        setCoin(res.data);
        setLoading(false);
      } catch (error) { }
    }
    fetchMarketsCoins();
    window.scrollTo(0, 0);
  }, [params.coinId]);

  return (
    <div className='prim-page'>
      {loading ? (
        <div className="loader">
          <ClipLoader color={'#0552FF'} loading={loading} size={100} />
        </div>
      ) : (
        <div className="coin-page">
          <div className="prim-div">
            <img src={coin.image?.large} alt="/" />
            <div>
              <p className="p-name-price">{coin?.name} price</p>
              <p>({coin.symbol?.toUpperCase()} / USD)</p>
            </div>
          </div>
          <div className="grid-container">
            <div>
              <div className="grid-sec">
                {coin.market_data?.current_price ? (
                  <p className="p-grid">
                    ${coin.market_data.current_price.usd.toLocaleString()}
                  </p>
                ) : null}
                <p>7 Day</p>
              </div>
              <div>
                <Sparklines data={coin.market_data?.sparkline_7d.price}>
                <SparklinesLine color='teal' />
              </Sparklines>
              </div>
              <div className="mrk-cap">
                <div>
                  <p className="p-mkt">Market Cap</p>
                  {coin.market_data?.market_cap ? (
                    <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                  ) : null}
                </div>
                <div>
                  <p className="volume">Volume (24h)</p>
                  {coin.market_data?.market_cap ? (
                    <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
                  ) : null}
                </div>
              </div>

              <div className="high-24h">
                <div>
                  <p className="p-high">24h High</p>
                  {coin.market_data?.high_24h ? (
                    <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                  ) : null}
                </div>
                <div>
                  <p className="p-low">24h Low</p>
                  {coin.market_data?.low_24h ? (
                    <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                  ) : null}
                </div>
              </div>
            </div>

            <div>
              <p className="p-mkt-sts">Market Stats</p>
              <div className="first-d-mkt-sts">
                <div>
                  <p className="anth-p">Market Rank</p>
                  {coin.market_cap_rank}
                </div>
                <div>
                  <p className="anth-p">Hashing Algorithm</p>
                  {coin.hashing_algorithm ? (
                    <p>{coin.hashing_algorithm}</p>
                  ) : null}
                </div>
                <div>
                  <p className="anth-p">Trust Score</p>
                  {coin.tickers ? (
                    <p>{coin.liquidity_score.toFixed(2)}</p>
                  ) : null}
                </div>
              </div>

              <div className="prc-chg">
                <div>
                  <p className="anth-p">Price Change (24h)</p>
                  {coin.market_data?.price_change_percentage_24h < 0 ? (
                    <p className="red">
                      {coin.market_data?.price_change_percentage_24h?.toFixed(
                        2
                      )}
                      %
                    </p>
                  ) : (
                    <p className="green">
                      {coin.market_data?.price_change_percentage_24h?.toFixed(
                        2
                      )}
                      %
                    </p>
                  )}
                </div>
                <div>
                  <p className="anth-p">Price Change (7d)</p>
                  {coin.market_data?.price_change_percentage_7d < 0 ? (
                    <p className="red">
                      {coin.market_data?.price_change_percentage_7d?.toFixed(2)}
                      %
                    </p>
                  ) : (
                    <p className="green">
                      {coin.market_data?.price_change_percentage_7d?.toFixed(2)}
                      %
                    </p>
                  )}
                </div>
                <div>
                  <p className="anth-p">Price Change (14d)</p>
                  {coin.market_data?.price_change_percentage_14d < 0 ? (
                    <p className="red">
                      {coin.market_data?.price_change_percentage_14d?.toFixed(
                        2
                      )}
                      %
                    </p>
                  ) : (
                    <p className="green">
                      {coin.market_data?.price_change_percentage_14d.toFixed(2)}
                      %
                    </p>
                  )}
                </div>
              </div>
              <div className="prc-chg">
                <div>
                  <p className="anth-p">Price Change (30d)</p>
                  {coin.market_data?.price_change_percentage_30d < 0 ? (
                    <p className="red">
                      {coin.market_data?.price_change_percentage_30d?.toFixed(
                        2
                      )}
                      %
                    </p>
                  ) : (
                    <p className="green">
                      {coin.market_data?.price_change_percentage_30d?.toFixed(
                        2
                      )}
                      %
                    </p>
                  )}
                </div>
                <div>
                  <p className="anth-p">Price Change (60d)</p>
                  {coin.market_data?.price_change_percentage_60d < 0 ? (
                    <p className="red">
                      {coin.market_data?.price_change_percentage_60d?.toFixed(
                        2
                      )}
                      %
                    </p>
                  ) : (
                    <p className="green">
                      {coin.market_data?.price_change_percentage_60d?.toFixed(
                        2
                      )}
                      %
                    </p>
                  )}
                </div>
                <div>
                  <p className="anth-p">Price Change (1y)</p>
                  {coin.market_data?.price_change_percentage_1y < 0 ? (
                    <p className="red">
                      {coin.market_data?.price_change_percentage_1y?.toFixed(2)}
                      %
                    </p>
                  ) : (
                    <p className="green">
                      {coin.market_data?.price_change_percentage_1y?.toFixed(2)}
                      %
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="description">
            {/* <div className="container"> */}
            <p className="description-p">About {coin.name}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ''
                ),
              }}
            ></p>
            {/* </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinPage;
