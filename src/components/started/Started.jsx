import React from 'react'
import './../started/Started.css'
import imgS from '../../assets/ih1.png'

const Started = () => {
  return (
        <div className="started">
            <div>
                <div className="start1">
                    <h3 className="start-h3">Start earning today</h3>
                    <p className='start-p'>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                    <div className="start-btn">
                        <a className="button-start" href='/'>
                            <button>Sign Up Now</button>
                        </a>
                    </div>
                </div>
            </div>
                <div>
                    <img className="img-s" src={imgS} alt="" srcset="" />
                </div>
        </div>
  )
}

export default Started