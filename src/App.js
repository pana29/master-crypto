import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Markets from './pages/markets/Markets';
import Navbar from './components/navbar/Navbar';
import News from './pages/news/News';
import Footer from './components/footer/Footer';
import CoinPage from './pages/coinpage/CoinPage';
import './index.css';
import Nft from './pages/nft/Nft';


function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/markets" element={<Markets />}></Route>
          <Route path="/news" element={<News />} />
          <Route path="/nft" element={<Nft />} />
          <Route path="/markets/:coinId" element={<CoinPage />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
