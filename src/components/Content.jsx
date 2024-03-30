import React from 'react'
import "../css/content.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAndroid, faCamera, faBattery, faAppleAlt, faMicrochip, faSimCard, faTemperature2, faGear } from '@fortawesome/free-solid-svg-icons'
import New from "../assets/new.png"

function Content() {
  return (
    <section id='content'>
      <div className="item-all">
        <div className="item-in">
          <div className="item">
            <div className="item-title-one">
              <p data-aos="fade-in">What's New? </p>
            </div>
            <div className="item-title-two">
              <h1 data-aos="fade-in">Our New Products</h1>
            </div>
            <div className="item-title-three">
              <p data-aos="fade-in">We provided a New Smartphones with many awesome features for 
                our customer satisfaction
                </p>
            </div>
              <div className="item-title-two">
                <h3 data-aos="fade-in">iPhone 15 Pro Max</h3>
              </div>
            </div>
            <div className="spesific">
              <div className="spesific-one">
                <div 
                className="text-one"
                data-aos="fade-right"
                >
                  <h4>
                    <FontAwesomeIcon icon={faCamera} className='tes'/>
                    48MP Of Camera
                  </h4>
                  <p>
                  Comes with a quad rear camera system including a 48MP primary, makes sure that you get the best shots in both low light and daylight settings.
                  </p>
                </div>
                <div 
                className="text-two"
                data-aos="fade-right"
                >
                  <h4>
                    <FontAwesomeIcon icon={faMobileAndroid} className='tes'/>
                    6.7-inch "diagonal" all-screen OLED
                  </h4>
                  <p>
                  Provided big screen size with high resolution and displayed with world's best smartphones displays
                  </p>
                </div>
                <div 
                className="text-three"
                data-aos="fade-right"
                >
                  <h4>
                    <FontAwesomeIcon icon={faBattery} className='tes'/>
                    4441 mAh Battery
                  </h4>
                  <p>
                  With large of battery capacity can stand long for 8 hours makes sure that you have best experiences
                  </p>
                </div>
                <div 
                className="text-four"
                data-aos="fade-right"
                >
                  <h4>
                    <FontAwesomeIcon icon={faAppleAlt} className='tes'/>
                    iOS 17.0
                  </h4>
                  <p>
                  Apple releases a new version of iOS software, they typically include security improvements, performance enhancements, and sometimes new features.
                  </p>
                </div>
              </div>
              <div 
              className="spesific-two"
              data-aos="fade-in"
              >
                <img 
                  src={ New } 
                  alt="tes" 
                />
              </div>
              <div className="spesific-three">
              <div 
              className="text-one"
              data-aos="fade-left"
              >
                  <h4>
                    <FontAwesomeIcon icon={faMicrochip} className='tes'/>
                    Apple A17 Pro "3 nm"
                  </h4>
                  <p>
                  Provided with latest chipsets transforms your device into a professional-quality camera, intelligent personal assistant, and elite gaming devices
                  </p>
                </div>
                <div 
                className="text-two"
                data-aos="fade-left"
                >
                  <h4>
                    <FontAwesomeIcon icon={faSimCard} className='tes'/>
                    8GB RAM & 1TB Internal Storage
                  </h4>
                  <p>
                    We gives you very big of internal storage and RAM for maximum performance of our smartphones
                  </p>
                </div>
                <div 
                className="text-three"
                data-aos="fade-left"
                >
                  <h4>
                    <FontAwesomeIcon icon={faTemperature2} className='tes'/>
                    28° Average Temperature
                  </h4>
                  <p>
                  We provided the optimizing your devices from overheated temperature
                  </p>
                </div>
                <div 
                className="text-four"
                data-aos="fade-left"
                >
                  <h4>
                    <FontAwesomeIcon icon={faGear} className='tes'/>
                    Features
                  </h4>
                  <p>
                  The iPhone 15 Pro Max may have an improved camera, a faster processor, an advanced display, and a more elegant design.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="new-button-all">
        <div 
        className="new-button"
        data-aos="fade-in"
        >
          <div className="new-button-in">
            <p>Know More</p>
            <div className="new-in"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content