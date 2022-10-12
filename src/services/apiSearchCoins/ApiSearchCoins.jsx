import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  headers: { Accept: 'application/json' },
});

const buildQueryParams = (obj) => {
  const arr = [];
  Object.keys(obj).forEach((k) => {
    if (obj[k]) arr.push(`${k}=${obj[k]}`);
  });
  return arr.join('&');
};

const getCoinsMarkets = (paramsObj) => {
  const params = buildQueryParams(paramsObj);
  return axiosInstance.get(`coins/markets?${params}`);
};

const searchCoin = (query) => {
  return axiosInstance.get(`/search?query=${query}`);
};

const getCoinById = (coinId, paramsObj) => {
  const params = buildQueryParams(paramsObj);
  return axiosInstance.get(`/coins/${coinId}?${params}`);
};

export { getCoinsMarkets, searchCoin, getCoinById };
