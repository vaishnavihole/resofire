import React from 'react';
import './Home.css';
import ImgHomeImg from './home-img.png'
import DelhiImg from './delhi.png'
import MumbaiImg from './mumbai.png'
import PuneImg from './pune.png'
import AhmednagarImg from './ahmednagar.png'
import NagpurImg from './nagpur.png'
import Navbar from '../../components/Navbar/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='home-header-container'>
        <div className='row'>
          <div className='col-md-6'>
            <img className="home-image" src={ImgHomeImg} />
          </div>

          <div className='col-md-6 d-flex align-items-center' >
            <div>
              <h2>India's best online room booking provider. More than 10000+ rooms in 50+ cities in India.</h2>
              <button className='explore-btn'>Explore Room</button>
            </div>
          </div>
        </div>
      </div>

      <div className='cities-container'>
        <h2 className='text-center m-4 mt-0'>We are available across all India </h2>
        <div className='cities-card-container'>

          <div className='city-card'>
            <img className="city-card-img" src={DelhiImg} />
            <h4 className='text-center mt-2'>Delhi</h4>
          </div>

          <div className='city-card'>
            <img className="city-card-img" src={MumbaiImg} />
            <h4 className='text-center mt-2'>Mumbai</h4>
          </div>


          <div className='city-card'>
            <img className="city-card-img" src={PuneImg} />
            <h4 className='text-center mt-2'>Pune</h4>
          </div>


          <div className='city-card'>
            <img className="city-card-img" src={AhmednagarImg} />
            <h4 className='text-center mt-2'>Ahmednagar</h4>
          </div>

          <div className='city-card'>
            <img className="city-card-img" src={NagpurImg} />
            <h4 className='text-center mt-2'>Nagpur</h4>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Home