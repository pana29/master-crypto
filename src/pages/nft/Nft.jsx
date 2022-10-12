import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import '../nft/Nft.css';

const Nft = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiNft = {
    method: 'GET',
    url: 'https://opensea13.p.rapidapi.com/assets',
    params: {
      collection_slug: 'cryptopunks',
      order_direction: 'desc',
      limit: '20',
      include_orders: 'false'
    },
    headers: {
      'X-RapidAPI-Key': 'd5c89041b5msh17928cdb7819d65p1efb03jsnbe2c628ba653',
      'X-RapidAPI-Host': 'opensea13.p.rapidapi.com'
    },
  };

  useEffect(() => {
    setLoading(true)
    axios
      .request(apiNft)
      .then(function (response) {
        console.log(response.data)
        setData(response.data.assets)
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false)
      });
  }, []);

  return (
    <>

      <div className='news-top'>
        <div className="container">
          <div className="content">
            <h1>NFT's Collection </h1>
            <p>Discover the Most Premium, Unique and Exclusive NFT Collections</p>
          </div>
        </div>
      </div>

      <div className='flex-card'>
        { !loading ? data.map(nft => (
          <div className='row' >
            <p className='crt-desc'>
              <img className='img-card' src={nft?.image_original_url} alt="/" />
            </p>
            <div className='ttl'>
              <h5 className='crt-title'>{nft?.collection.name}</h5>
            </div>
            <h6 className='token-id'>{nft?.token_id}</h6>
            <p className='traits'>{nft?.traits[2]?.value}</p>
            <div className='crt-btn'>
              <a href={nft.external_link} className='a-btn' target="_blank" >Read</a>
            </div>
          </div>
        )) :  
        <div className="app" style={{position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, background: '#00000059'}}>
            <ClipLoader color={"#0552FF"} loading={loading} size={100} />
        </div>}
      </div>
    </>
  );
};

export default Nft;
