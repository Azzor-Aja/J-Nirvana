import React from 'react'
import '../css/fitur.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faHeadset, faTicket, faSignal, faCheck } from '@fortawesome/free-solid-svg-icons'
import fitur from '../assets/features.png'
import fiturTwo from '../assets/features2.png'

function Fitur() {
  return (
    <section id='features'>
      <div className="features-all">
        <div className="features-in">
          <div className="features">
            <div className="features-img">
              <img src= {fitur} data-aos="fade-right" />
            </div>
            <div className="features-text">
              <p
              data-aos="fade-left"
              >Our Excellence</p>
              <h1
              data-aos="fade-left"
              >Excellence We Provided In Our Smartphone</h1>
              <h4
              data-aos="fade-left"
              >We offer several gifts that we have prepared 
                if you buy our product that will not disappoint buyers,
                namely the following things, such as warranty, merch,
                and other things.</h4>
              <div 
              className="features-medal"
              data-aos="fade-left"
              >
                <FontAwesomeIcon icon={faMedal} className='cart-medal'/>
                <h4>3 Years Of Warranty</h4>
              </div>
              <div 
              className="features-medal"
              data-aos="fade-left"
              >
                <FontAwesomeIcon icon={faHeadset} className='cart-medal'/>
                <h4>Free Merchandise</h4>
              </div>
              <div 
              className="features-medal"
              data-aos="fade-left"
              >
                <FontAwesomeIcon icon={faTicket} className='cart-medal'/>
                <h4>20% Cashback In First Purchase</h4>
              </div>
              <div 
              className="features-medal"
              data-aos="fade-left"
              >
                <FontAwesomeIcon icon={faSignal} className='cart-medal'/>
                <h4>10 GB Of Free Internet Data</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featuresTwo-all">
        <div className="featuresTwo-in">
          <div className="featuresTwo">
            <div 
            className="features-text"
            data-aos="fade-right"
            >
              <p>Our Benefits</p>
              <h1>Benefits We Provided In Our Smartphone</h1>
              <h4>
                In addition to the benefits above, there 
                are also internal benefits that you will 
                get if you buy a Smartphone compared to other Smartphones
              </h4>
              <div 
              className="features-check"
              data-aos="fade-right"
              >
                <FontAwesomeIcon icon={faCheck} className='checkList'/>
                <h4>
                  We gives you the best prices with high
                  quality for any needed such as gaming, 
                  photography or for professional purposes.
                </h4>
              </div>
              <div 
              className="features-check"
              data-aos="fade-right"
              >
                <FontAwesomeIcon icon={faCheck} className='checkList' />
                <h4>
                  Our smartphones includes 5G carrier 
                  aggregation across TDD-FDD bands and a 
                  5nm 5G baseband for long battery life. 
                  Plus, get the world's fastest 
                  uplink & downlink 5G speeds possible.
                </h4>
              </div>
              <div 
              className="features-check"
              data-aos="fade-right"
              >
                <FontAwesomeIcon icon={faCheck} className='checkList'/>
                <h4>
                  Up to 30% performance improvement, increasing 
                  responsiveness up to 20%. Make gameplay richer 
                  with 35% faster graphics rendering.
                </h4>
              </div>
              <div 
              className="features-check"
              data-aos="fade-right"
              >
                <FontAwesomeIcon icon={faCheck} className='checkList'/>
                <h4>
                  With a Triple ISP. Capture three 4K HDR videos, 
                  or three 28 MP photos, at a breakthrough 2.7 
                  gigapixels per second—35% faster than the predecessor.  
                </h4>
              </div>
              <div 
              className="features-check"
              data-aos="fade-right"
              >
                <FontAwesomeIcon icon={faCheck} className='checkList'/>
                <h4>
                  Security supports Truepic, a cryptography seal that ensures 
                  and verifies the authenticity of photos on your device. 
                  The world's first camera compliant with the Content 
                  Authenticity Initiative (CAI).
                </h4>
              </div>
            </div>
            <div className="featuresTwo-img" data-aos="fade-left">
              <img src= {fiturTwo} />
            </div>
          </div>
        </div>
      </div>
      <div className="featuresButton-all">
        <div 
        className="featuresButton"
        data-aos="fade-right"
        >
          <div className="featuresButton-in">
            <p>Read More</p>
            <div className="new-in"></div>
          </div>
        </div>
      </div>
      <div className="containerBox-all">
        <div className="containerBox-in">
          <div className="containerBox">
            <div 
            className="containerBoxOut"
            data-aos="fade-in"
            >
              <div className="containerBoxIn">
                <div className="box">
                  <h1>Get Started With Us</h1>
                  <p>Subscribe and find out about our latest products, news and more.</p>
                </div>
                <div className="started">
                  <h4>Get Started</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fitur