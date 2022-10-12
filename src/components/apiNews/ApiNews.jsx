import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import '../apiNews/ApiNews.css';

import { useEffect, useState } from 'react';

const ApiNews = ({ title }) => {
  const [dataApi, setDataApi] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('ffffff');

  const apiNews = {
      method: 'GET',
      url: 'https://last-crypto-news.p.rapidapi.com/cryptonews',
      headers: {
        'X-RapidAPI-Key': 'd5c89041b5msh17928cdb7819d65p1efb03jsnbe2c628ba653',
        'X-RapidAPI-Host': 'last-crypto-news.p.rapidapi.com'
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .request(apiNews)
      .then(function (response) {
        console.log(response.data);
        setDataApi(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);


  return (
    <div className="flex-card-news">
      {!loading ? (
        dataApi?.map((value, i) => {
          return (
            <div className="row-news" key={i}>
              <div className="ttl-news">
                <h5 className="crt-title-news">{value.title}</h5>
              </div>
              <p className="crt-desc-news">
                <img className="img-card-news" src={value.image} alt="/" />
                {value.description}
              </p>
              <div className="crt-btn-news">
                <a href={value.linknews} className="a-btn-news" target="_blank">
                  Read
                </a>
              </div>
            </div>
          );
        })
      ) : (
        <div className="app" style={{position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, background: '#00000059'}}>
          <ClipLoader color={'#0552FF'} loading={loading} size={100} />
        </div>
      )}
    </div>




  );
};

export default ApiNews;
