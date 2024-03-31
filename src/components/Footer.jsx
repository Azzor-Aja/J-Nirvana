import React from 'react'
import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="footer-all">
        <div className="footer-in">
            <div className="footer">
                <div className="footer-left">
                    <div className="nirvana">
                        <h1>NIRVANA</h1>
                        <p>
                            Our vision is to bring a
                            new change of technologies.
                        </p>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="about">
                        <h2>About</h2>
                        <ul>
                            <li><a href="#contact">About Us</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#article">News & Blog</a></li>
                        </ul>
                    </div>
                    <div className="about">
                        <h2>Company</h2>
                        <ul>
                            <li><a href="#beranda">How We Work?</a></li>
                            <li><a href="#product">Products</a></li>
                            <li><a href="#beranda">Security</a></li>
                        </ul>
                    </div><div className="about">
                        <h2>Support</h2>
                        <ul>
                            <li><a href="#beranda">FAQs</a></li>
                            <li><a href="#beranda">Support Center</a></li>
                            <li><a href="#beranda">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="about">
                        <h2>Follow Us</h2>
                        <ul>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebook} className='footer-font'/>
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} className='footer-font'/>
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faYoutube} className='footer-font'/>
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faPinterest} className='footer-font'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-down">
                <div className="down-left">
                    <h6>© Copyright 2023 Nirvana. All rights reserved</h6>
                </div>
                <div className="down-right">
                    <h6>Terms & Agreements</h6>
                    <h6>Privacy Policy</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
