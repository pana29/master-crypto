import React from 'react'
import punk1 from '../../assets/tinywow_punk1_5513163.png'
import punk2 from '../../assets/tinywow_punk2_5513152.png'
import punk3 from '../../assets/tinywow_punk3_5513129.png'
import { Link } from 'react-router-dom';
import './../trust/Trust.css'


const Trust = () => {
  return (
    <div className="trust">
        <div className="trust-container">
            <div className="trust-content">
                <h2 className='trust-h2'>The most trusted cryprocurrency platform</h2>
                <p className='trust-p-up'>Here are a few reasons why you should choose MasterCrypto</p> 
                <div className="cards">
                <Link to='/nft'>
                    <div className="card1">
                        <img className='punk-2' src={punk1} alt=""/>
                        <h2 className='trust-h2-2'>CryptoPunks</h2>
                        <p className='trust-p-2'>10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.</p>
                        <p className='learn-more-card'>Learn more</p>
                    </div>
                    </Link> 
                    <Link to='/nft'>
                    <div className="card1">
                    <img className='punk-3' src={punk2} alt=""/>
                        <h2 className='trust-h2-2'>CryptoPunks</h2>
                        <p className='trust-p-2'>The project that inspired the modern CryptoArt movement.</p>
                        <p className='learn-more-card'>Learn more</p>
                    </div>
                    </Link>
                    <Link to='/nft'>
                    <div className="card1">
                    <img className='punk' src={punk3} alt="" />
                        <h2 className='trust-h2-2'>CryptoPunks</h2>
                        <p className='trust-p-2'>Yuga Labs acquires CryptoPunks and MasterCrypto and gives commercial rights to the community.</p>
                        <p className='learn-more-card'>Learn more</p>
                    </div>
                    
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trust;