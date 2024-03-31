import React from 'react'
import '../css/product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import One from '../assets/top.png'
import Two from '../assets/8s.png'
import Three from '../assets/xr.png'
import Four from '../assets/13pro.png'
import Five from '../assets/13mini.png'
import Six from '../assets/14pro.png'
import Seven from '../assets/12pro.png'
import Eight from '../assets/14.png'
import Nine from '../assets/11.png'

function Product() {
  return (
    <section id='product'>
        <div className="item-all">
          <div className="item-in">
            <div className="item">
            <div className="item-title-one">
              <p data-aos="fade-in">Best Choises</p>
            </div>
            <div className="item-title-two">
              <h1 data-aos="fade-in">Our Popular Products</h1>
            </div>
            <div className="item-title-three">
              <p data-aos="fade-in" className='text-sz'>Find out about our popular products and adjust to your needs
                </p>
            </div>
              <div 
              className="item-title-two"
              data-aos="fade-in"
              >
                <h4>||</h4>
                <h4>All Product</h4>
                <h4>||</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="product-all">
          <div className="product-in">
            <div className="product">
              <div className="grid-container">
                <div 
                class="grid-item"
                data-aos="fade-right"
                >
                  <div 
                  className="image-item-one">
                    <img 
                    src={One}
                    />
                    <div className="price">
                      <h4>
                        $1,597.00
                      </h4>
                      <p>
                        Popular Product
                      </p>
                    </div>
                    <div className="name">
                      <h6>
                        iPhone 15 Pro Max
                      </h6>
                      <p>
                        Introducing Smartphone with the most
                        powerfull camera and smooth scree ...
                      </p>
                    </div>
                    <div className="view-all">
                      <div className="view-button">
                        <p>
                          Buy 
                          <FontAwesomeIcon icon={faCartShopping} className='cart-font'/>
                        </p>
                      </div>
                      <div className="view">
                        <a href='#'>
                          View More
                          <FontAwesomeIcon icon={faGreaterThan} className='greater-font'/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                class="grid-item"
                data-aos="fade-in"
                >
                  <div className="image-item-two">
                    <img 
                    src={Two}
                    />
                    <div className="price">
                      <h4>
                        $1,597.00
                      </h4>
                      <p>
                        New Product
                      </p>
                    </div>
                    <div className="name">
                      <h6>
                        iPhone 15 Pro Max
                      </h6>
                      <p>
                        Introducing Smartphone with the most
                        powerfull camera and smooth scree ...
                      </p>
                    </div>
                    <div className="view-all">
                      <div className="view-button">
                        <p>
                          Buy 
                          <FontAwesomeIcon icon={faCartShopping} className='cart-font'/>
                        </p>
                      </div>
                      <div className="view">
                        <a href='#'>
                          View More
                          <FontAwesomeIcon icon={faGreaterThan} className='greater-font'/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                class="grid-item"
                data-aos="fade-left"
                >
                  <div className="image-item-three">
                    <img 
                    src={Three}
                    />
                    <div className="price">
                      <h4>
                        $1,597.00
                      </h4>
                      <p>
                        New Product
                      </p>
                    </div>
                    <div className="name">
                      <h6>
                        iPhone 15 Pro Max
                      </h6>
                      <p>
                        Introducing Smartphone with the most
                        powerfull camera and smooth scree ...
                      </p>
                    </div>
                    <div className="view-all">
                      <div className="view-button">
                        <p>
                          Buy 
                          <FontAwesomeIcon icon={faCartShopping} className='cart-font'/>
                        </p>
                      </div>
                      <div className="view">
                        <a href='#'>
                          View More
                          <FontAwesomeIcon icon={faGreaterThan} className='greater-font'/>
                        </a>
                      </div>
                    </div>
                  </div>  
                </div>  
                <div 
                class="grid-item"
                data-aos="fade-right"
                >
                  <div 
                  className="image-item-four"
                  >
                    <img 
                    src={Four}
                    />
                    <div className="price">
                      <h4>
                        $1,597.00
                      </h4>
                      <p>
                        New Product
                      </p>
                    </div>
                    <div className="name">
                      <h6>
                        iPhone 15 Pro Max
                      </h6>
                      <p>
                        Introducing Smartphone with the most
                        powerfull camera and smooth scree ...
                      </p>
                    </div>
                    <div className="view-all">
                      <div className="view-button">
                        <p>
                          Buy 
                          <FontAwesomeIcon icon={faCartShopping} className='cart-font'/>
                        </p>
                      </div>
                      <div className="view">
                        <a href='#'>
                          View More
                          <FontAwesomeIcon icon={faGreaterThan} className='greater-font'/>
                        </a>
                      </div>
                    </div>
                  </div>  
                </div>
                <div class="grid-item">
                  <div 
                  className="image-item-five"
                  data-aos="fade-in"
                  >
                    <img 
                    src={Five}
                    />
                    <div className="price">
                      <h4>
                        $1,597.00
                      </h4>
                      <p>
                        New Product
                      </p>
                    </div>
                    <div className="name">
                      <h6>
                        iPhone 15 Pro Max
                      </h6>
                      <p>
                        Introducing Smartphone with the most
                        powerfull camera and smooth scree ...
                      </p>
                    </div>
                    <div className="view-all">
                      <div className="view-button">
                        <p>
                          Buy 
                          <FontAwesomeIcon icon={faCartShopping} className='cart-font'/>
                        </p>
                      </div>
                      <div className="view">
                        <a href='#'>
                          View More
                          <FontAwesomeIcon icon={faGreaterThan} className='greater-font'/>
                        </a>
                      </div>
                    </div>
                  </div>  
                </div>
                <div 
                class="grid-item"
                data-aos="fade-left"
                >
                  <div className="image-item-six">
                    <img 
                    src={Six}
                    />
                    <div className="price">
                      <h4>
                        $1,597.00
                      </h4>
                      <p>
                        New Product
                      </p>
                    </div>
                    <div className="name">
                      <h6>
                        iPhone 15 Pro Max
                      </h6>
                      <p>
                        Introducing Smartphone with the most
                        powerfull camera and smooth scree ...
                      </p>
                    </div>
                    <div className="view-all">
                      <div className="view-button">
                        <p>
                          Buy 
                          <FontAwesomeIcon icon={faCartShopping} className='cart-font'/>
                        </p>
                      </div>
                      <div className="view">
                        <a href='#'>
                          View More
                          <FontAwesomeIcon icon={faGreaterThan} className='greater-font'/>
                        </a>
                      </div>
                    </div>
                  </div>  
                </div>  
                <div 
                class="grid-item"
                data-aos="fade-right"
                >
                  <div className="image-item-seven">
                    <img 
                    src={Seven}
                    />
                    <div className="price">
                      <h4>
                        $1,597.00
                      </h4>
                      <p>
                        New Product
                      </p>
                    </div>
                    <div className="name">
                      <h6>
                        iPhone 15 Pro Max
                      </h6>
                      <p>
                        Introducing Smartphone with the most
                        powerfull camera and smooth scree ...
                      </p>
                    </div>
                    <div className="view-all">
                      <div className="view-button">
                        <p>
                          Buy 
                          <FontAwesomeIcon icon={faCartShopping} className='cart-font'/>
                        </p>
                      </div>
                      <div className="view">
                        <a href='#'>
                          View More
                          <FontAwesomeIcon icon={faGreaterThan} className='greater-font'/>
                        </a>
                      </div>
                    </div>
                  </div>  
                </div>
                <div class="grid-item">
                  <div 
                  className="image-item-eight"
                  data-aos="fade-in"
                  >
                    <img 
                    src={Eight}
                    />
                    <div className="price">
                      <h4>
                        $1,597.00
                      </h4>
                      <p>
                        New Product
                      </p>
                    </div>
                    <div className="name">
                      <h6>
                        iPhone 15 Pro Max
                      </h6>
                      <p>
                        Introducing Smartphone with the most
                        powerfull camera and smooth scree ...
                      </p>
                    </div>
                    <div className="view-all">
                      <div className="view-button">
                        <p>
                          Buy 
                          <FontAwesomeIcon icon={faCartShopping} className='cart-font'/>
                        </p>
                      </div>
                      <div className="view">
                        <a href='#'>
                          View More
                          <FontAwesomeIcon icon={faGreaterThan} className='greater-font'/>
                        </a>
                      </div>
                    </div>
                  </div>  
                </div>
                <div 
                class="grid-item"
                data-aos="fade-left"
                >
                  <div className="image-item-nine">
                    <img 
                    src={Nine}
                    />
                    <div className="price">
                      <h4>
                        $1,597.00
                      </h4>
                      <p>
                        New Product
                      </p>
                    </div>
                    <div className="name">
                      <h6>
                        iPhone 15 Pro Max
                      </h6>
                      <p>
                        Introducing Smartphone with the most
                        powerfull camera and smooth scree ...
                      </p>
                    </div>
                    <div className="view-all">
                      <div className="view-button">
                        <p>
                          Buy 
                          <FontAwesomeIcon icon={faCartShopping} className='cart-font'/>
                        </p>
                      </div>
                      <div className="view">
                        <a href='#'>
                          View More
                          <FontAwesomeIcon icon={faGreaterThan} className='greater-font'/>
                        </a>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>  
            </div>
          </div>
        </div>
      <div className="product-button-all">
        <div 
        className="product-button"
        data-aos="fade-in"
        >
          <div className="product-button-in">
            <p>Know More</p>
            <div className="product-in"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product