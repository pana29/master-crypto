import React, { useState, useEffect } from 'react'
import { getCoinsMarkets } from '../../services/apiSearchCoins/ApiSearchCoins';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import '../tblTop/TblTop.css'

const TblTop = ({onCoinsReceived}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [color, setColor] =useState("ffffff")
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchMarketsCoins() {
            setLoading(true)
            try {
                const res = await getCoinsMarkets({
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    page: 1,
                    per_page: 250,
                });

                setData(res.data);
                
                onCoinsReceived(res.data);
            } catch (error) { }
            setLoading(false);
        }
        fetchMarketsCoins();
    }, [])

    const handleRedirect = (coinId) => {
        navigate(`/markets/${coinId}`)
    }
    if (!data) return null;
    return (
            <div className='margin'>
                {
                    loading ? <div className="loader"><ClipLoader color={"#0552FF"} loading={loading} size={100} /></div>
                    :
                    <div className="high-new-top">
                    <div className='markets-h'>
                        <p>Markets</p>
                    </div>
                    <div className="base">
                        <div className="high">
                            <div className="high-name">
                                <h5>Highlight Coin</h5>
                            </div>
                            <div className="high-name-2" onClick={() => handleRedirect(data[49].id)}>
                                <div className="sym-name">
                                    <img className='img-top' src={data[49].image} alt="safafaf"/>
                                    <p>{data[49].symbol?.toUpperCase()}</p>
                                </div>
                                <div className="price-high">{data[49].current_price}</div>
                                <div className="procent">
                                    {data[49].price_change_percentage_24h < 0 ? (
                                        <p className="coin-percent-2 red">{data[49].price_change_percentage_24h?.toFixed(2)}%</p>
                                    ) : (
                                        <p className="coin-percent-2 green">{data[49].price_change_percentage_24h?.toFixed(2)}%</p>
                                    )}</div>
                            </div>
                            <div className="high-name-2" onClick={() => handleRedirect(data[4].id)}>
                                <div className="sym-name">
                                    <img className='img-top' src={data[4].image} alt="safafaf" />
                                    <p>{data[4].symbol?.toUpperCase()}</p>
                                </div>
                                <div className="price-high">{data[4].current_price}</div>
                                <div className="procent">
                                    {data[4].price_change_percentage_24h < 0 ? (
                                        <p className="coin-percent-2 red">{data[4].price_change_percentage_24h?.toFixed(2)}%</p>
                                    ) : (
                                        <p className="coin-percent-2 green">{data[4].price_change_percentage_24h?.toFixed(2)}%</p>
                                    )}</div>
                            </div>
                            <div className="high-name-2" onClick={() => handleRedirect(data[8].id)}>
                                <div className="sym-name">
                                    <img className='img-top' src={data[8].image} alt="safafaf"  />
                                    <p>{data[8].symbol?.toUpperCase()}</p>
                                </div>
                                <div className="price-high">{data[8].current_price}</div>
                                <div className="procent">
                                    {data[8].price_change_percentage_24h < 0 ? (
                                        <p className="coin-percent-2 red">{data[8].price_change_percentage_24h?.toFixed(2)}%</p>
                                    ) : (
                                        <p className="coin-percent-2 green">{data[8].price_change_percentage_24h?.toFixed(2)}%</p>
                                    )}</div>
                            </div>
                        </div>
                        <div className="high">
                            <div className="high-name" >
                                <h5>Favorite Coin</h5>
                            </div>
                            <div className="high-name-2" onClick={() => handleRedirect(data[7].id)}>
                                <div className="sym-name">
                                    <img className='img-top' src={data[7].image} alt="safafaf" />
                                    <p>{data[7].symbol?.toUpperCase()}</p>
                                </div>
                                <div className="price-high">{data[7].current_price}</div>
                                <div className="procent">
                                    {data[7].price_change_percentage_24h < 0 ? (
                                        <p className="coin-percent-2 red">{data[7].price_change_percentage_24h?.toFixed(2)}%</p>
                                    ) : (
                                        <p className="coin-percent-2 green">{data[7].price_change_percentage_24h?.toFixed(2)}%</p>
                                    )}</div>
                            </div>
                            <div className="high-name-2" onClick={() => handleRedirect(data[116].id)} >
                                <div className="sym-name">
                                    <img className='img-top' src={data[116].image} alt="safafaf" />
                                    <p>{data[116].symbol?.toUpperCase()}</p>
                                </div>
                                <div className="price-high">{data[116].current_price}</div>
                                <div className="procent">
                                    {data[116].price_change_percentage_24h < 0 ? (
                                        <p className="coin-percent-2 red">{data[116].price_change_percentage_24h?.toFixed(2)}%</p>
                                    ) : (
                                        <p className="coin-percent-2 green">{data[116].price_change_percentage_24h?.toFixed(2)}%</p>
                                    )}</div>
                            </div>
                            <div className="high-name-2" onClick={() => handleRedirect(data[9].id)}>
                                <div className="sym-name">
                                    <img className='img-top' src={data[9].image} alt="safafaf"  />
                                    <p>{data[9].symbol?.toUpperCase()}</p>
                                </div>
                                <div className="price-high">{data[9].current_price}</div>
                                <div className="procent">
                                    {data[9].price_change_percentage_24h < 0 ? (
                                        <p className="coin-percent-2 red">{data[9].price_change_percentage_24h?.toFixed(2)}%</p>
                                    ) : (
                                        <p className="coin-percent-2 green">{data[9].price_change_percentage_24h?.toFixed(2)}%</p>
                                    )}</div>
                            </div>
                        </div>
                        <div className="high">
                            <div className="high-name">
                                <h5>Top Volume Coin</h5>
                            </div>
                            <div className="high-name-2" onClick={() => handleRedirect(data[0].id)}>
                                <div className="sym-name">
                                    <img className='img-top' src={data[0].image} alt="safafaf" />
                                    <p>{data[0].symbol?.toUpperCase()}</p>
                                </div>
                                <div className="price-high">{data[0].current_price}</div>
                                <div className="procent">
                                    {data[0].price_change_percentage_24h < 0 ? (
                                        <p className="coin-percent-2 red">{data[0].price_change_percentage_24h?.toFixed(2)}%</p>
                                    ) : (
                                        <p className="coin-percent-2 green">{data[0].price_change_percentage_24h?.toFixed(2)}%</p>
                                    )}</div>
                            </div>
                            <div className="high-name-2" onClick={() => handleRedirect(data[1].id)}>
                                <div className="sym-name">
                                    <img className='img-top' src={data[1].image} alt="safafaf"  />
                                    <p>{data[1].symbol?.toUpperCase()}</p>
                                </div>
                                <div className="price-high">{data[1].current_price}</div>
                                <div className="procent">
                                    {data[1].price_change_percentage_24h < 0 ? (
                                        <p className="coin-percent-2 red">{data[1].price_change_percentage_24h?.toFixed(2)}%</p>
                                    ) : (
                                        <p className="coin-percent-2 green">{data[1].price_change_percentage_24h?.toFixed(2)}%</p>
                                    )}</div>
                            </div>
                            <div className="high-name-2" onClick={() => handleRedirect(data[19].id)}>
                                <div className="sym-name">
                                    <img className='img-top' src={data[19].image} alt="safafaf" />
                                    <p>{data[19].symbol?.toUpperCase()}</p>
                                </div>
                                <div className="price-high">{data[19].current_price}</div>
                                <div className="procent">
                                    {data[19].price_change_percentage_24h < 0 ? (
                                        <p className="coin-percent-2 red">{data[19].price_change_percentage_24h?.toFixed(2)}%</p>
                                    ) : (
                                        <p className="coin-percent-2 green">{data[19].price_change_percentage_24h?.toFixed(2)}%</p>
                                    )}</div>
                            </div>
                        </div>
        
                        <div className="high">
                            <div className="high-name">
                                <h5>New Coin</h5>
                            </div>
                            <div className="high-name-2" onClick={() => handleRedirect(data[237].id)}>
                                <div className="sym-name">
                                    <img className='img-top' src={data[237].image} alt="safafaf" />
                                    <p>{data[237].symbol?.toUpperCase()}</p>
                                </div>
                                <div className="price-high">{data[237].current_price}</div>
                                <div className="procent">
                                    {data[237].price_change_percentage_24h < 0 ? (
                                        <p className="coin-percent-2 red">{data[237].price_change_percentage_24h?.toFixed(2)}%</p>
                                    ) : (
                                        <p className="coin-percent-2 green">{data[237].price_change_percentage_24h?.toFixed(2)}%</p>
                                    )}</div>
                            </div>
                            <div className="high-name-2" onClick={() => handleRedirect(data[223].id)}>
                                <div className="sym-name">
                                    <img className='img-top' src={data[223].image} alt="safafaf" />
                                    <p>{data[223].symbol?.toUpperCase()}</p>
                                </div>
                                <div className="price-high">{data[223].current_price}</div>
                                <div className="procent">
                                    {data[223].price_change_percentage_24h < 0 ? (
                                        <p className="coin-percent-2 red">{data[223].price_change_percentage_24h?.toFixed(2)}%</p>
                                    ) : (
                                        <p className="coin-percent-2 green">{data[223].price_change_percentage_24h?.toFixed(2)}%</p>
                                    )}</div>
                            </div>
                            <div className="high-name-2" onClick={() => handleRedirect(data[214].id)}>
                                <div className="sym-name">
                                    <img className='img-top' src={data[214].image} alt="safafaf" />
                                    <p>{data[214].symbol?.toUpperCase()}</p>
                                </div>
                                <div className="price-high">{data[214].current_price}</div>
                                <div className="procent">
                                    {data[214].price_change_percentage_24h < 0 ? (
                                        <p className="coin-percent-2 red">{data[214].price_change_percentage_24h?.toFixed(2)}%</p>
                                    ) : (
                                        <p className="coin-percent-2 green">{data[214].price_change_percentage_24h?.toFixed(2)}%</p>
                                    )}</div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
       

    )
}

export default TblTop