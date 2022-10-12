import React from 'react';
import Hero from '../../components/hero/Hero';
import Featured from '../../components/featured/Featured';
import Info from '../../components/info/Info';
import Trust from '../../components/trust/Trust';
import BitEth from '../../components/biteth/BitEth';


const Home = () => {
  return (


    <div>
      <Hero />
      <Featured />
      <Info />
      <BitEth />
      <Trust />
    </div>
  );
};

export default Home;
