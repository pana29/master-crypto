import { useState, useEffect, useRef } from 'react';
import '../markets/Markets.css';
import MarketsCoin from '../../components/marketsCoin/MarketsCoin';
import {
  getCoinsMarkets,
  searchCoin,
} from '../../services/apiSearchCoins/ApiSearchCoins';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { ClipLoader } from 'react-spinners';
import TblTop from '../../components/tblTop/TblTop';
import { useNavigate } from 'react-router-dom';

const Markets = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState();
  const savedPage = sessionStorage.getItem('page');
  const [currentPage, setCurrentPage] = useState(
    savedPage ? Number(savedPage) : 1
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const pageSize = 10;
  const allCoins = useRef([]);
  const throttId = useRef();

  useEffect(() => {
    async function fetchMarketsCoins() {
      try {
        const res = await getCoinsMarkets({
          vs_currency: 'usd',
          order: 'market_cap_desc',
          page: currentPage,
          per_page: pageSize,
          sparkline: true,
        });
        console.log(res);
        setCoins(res.data);
        setLoading(false);
      } catch (error) {}
    }
    setLoading(true);
    fetchMarketsCoins();
  }, [currentPage]);

  const handleCoinSearch = (e) => {
    const searchInput = e.target.value;
    if (!throttId.current && searchInput && searchInput !== '') {
      throttId.current = setTimeout(() => {
        clearTimeout(throttId.current);
        throttId.current = null;
      }, 500);
      searchCoin(searchInput)
        .then((res) => {
          console.log(res);
          if (res.status === 200) setSearch(res.data.coins);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if(searchInput === '') {
      setSearch(undefined);
    }
  };

  const handlePageChange = (direction) => {
    if (direction === 'inc') {
      setCurrentPage((page) => {
        const newPage = page + 1;
        sessionStorage.setItem('page', newPage);
        return newPage;
      });
    } else if (direction === 'dec') {
      setCurrentPage((page) => {
        const newPage = page - 1;
        sessionStorage.setItem('page', newPage);
        return newPage;
      });
    }
  };

  const getTotalCoins = (coins) => {
    allCoins.current = coins;
  };

  const handleSelectSearchedCoin = (coinId) => {
    navigate(`markets/${coinId}`);
  };

  return (
    <>
      {loading ? (
        <div
          className="app"
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: '#00000059',
          }}
        >
          <ClipLoader
            className="clip-loader"
            color={'#0552FF'}
            loading={loading}
            size={200}
          />
        </div>
      ) : (
        <div className="markets">
          <TblTop onCoinsReceived={getTotalCoins} />
          <div className="coin-search">
            <div className="search-form">
              <input
                type="text"
                placeholder="Search"
                className="coin-input"
                onChange={handleCoinSearch}
              />
              <i className="search-btn">
                <BiSearch size={25} />
              </i>
              {search && (
                <div className="search-suggestions-list">
                  {search.map((searchSuggestion) => (
                    <p
                      key={searchSuggestion.id}
                      onClick={() =>
                        handleSelectSearchedCoin(searchSuggestion.id)
                      }
                    >
                      {searchSuggestion.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="src-tbl">
            <table className="tbl-tbl">
              <thead>
                <td className="tbl-mark">
                  <td className="td1">Name</td>
                  <td className="td2">Sym</td>
                  <td className="td3">Price</td>
                  <td className="td4">Volume</td>
                  <td className="td5">24h</td>
                  <td className="td6">MarketCap</td>
                  <td className="td7">Sparkline7D</td>
                </td>

              </thead>
            </table>
          </div>
          {coins.map((coin) => {
            return (
              <MarketsCoin
                id={coin.id}
                key={coin.id}
                name={coin.name}
                image={coin.image || coin.thumb}
                symbol={coin.symbol}
                marketcup={coin.market_cap}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
                sparkline_in_7d={coin?.sparkline_in_7d?.price}
              />
            );
          })}
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => handlePageChange('dec')}
              disabled={currentPage === 1}
            >
              <AiOutlineDoubleLeft />
            </button>
            <div className="current-number">{currentPage}</div>
            <button
              className="pagination-btn"
              onClick={() => handlePageChange('inc')}
            >
              <AiOutlineDoubleRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Markets;
