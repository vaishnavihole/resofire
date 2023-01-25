import React from 'react';
import './Home.css';
import ImgHomeImg from './home-img.png'
import DelhiImg from './delhi.png'
import MumbaiImg from './mumbai.png'
import PuneImg from './pune.png'
import AhmednagarImg from './ahmednagar.png'
import NagpurImg from './nagpur.png'
import CleaningImg from './cleaning.png'
import BurgerImg from './burger.png'
import WiFiImg from './wifi.png'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';

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

      <div className='features-container'>
        <h2 className='features-container-title'>Our Key Features</h2>

        <div className='features-card-containers'>
          <div className='feature-card'>
            <img className='cleaning-img' src={CleaningImg} />
            <h5 className='feature-card-title'>24x7 Housekeeping</h5>
            <p className='feature-card-discription'>Dedicated staff for Housekeeping. On request Housekeeping is available.</p>
          </div>

          <div className='feature-card'>
            <img className='cleaning-img' src={BurgerImg} />
            <h5 className='feature-card-title'>Food Services</h5>
            <p className='feature-card-discription'>We dont just stop for room. We have food service facility you can order one click.</p>
          </div>

          <div className='feature-card'>
            <img className='cleaning-img' src={WiFiImg} />
            <h5 className='feature-card-title'>Amenities</h5>
            <p className='feature-card-discription'>Wi-Fi, Blanket, pillow etc. Will be provided all these will be provided with no charges. </p>
          </div>

        </div>
         
      </div>
      <Footer />
    </div>

  )
}

export default Home