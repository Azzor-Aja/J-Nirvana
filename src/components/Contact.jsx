import React from 'react'
import '../css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faVideo, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-regular-svg-icons'

function Contact() {
  return (
    <section id='contact'>
        <div className="contact-all">
            <div className="contact-in">
                <div className="contact">
                    <div className="contact-text">
                        <h4 data-aos="fade-righ">Contact Us</h4>
                        <h1 data-aos="fade-right">Get In Touch With Us</h1>
                        <p data-aos="fade-right">
                            Is there a problem finding 
                            your dream smartphones? Need a 
                            guide in buying first smartphones? 
                            just contact us.
                        </p>
                        <div class="gridContact">
                            <div class="gridContact-item" data-aos="fade-right">
                                <div className="gridContact-allItem">
                                    <FontAwesomeIcon icon={faPhoneVolume} className='contact-font'/>
                                    <div className="contactNumber">
                                        <h6>Call Center</h6>
                                        <p>089-772-766-63</p>
                                    </div>
                                </div>
                                <div className="contact-bttn">
                                    <div className="contact-bttn-in">
                                        <p>Call Now</p>
                                    </div>
                                </div>
                            </div>
                            <div class="gridContact-item" data-aos="fade-right">
                                <div className="gridContact-allItem">
                                    <FontAwesomeIcon icon={faMessage} className='contact-font'/>
                                    <div className="contactNumber">
                                        <h6>Chat</h6>
                                        <p>089-772-766-63</p>
                                    </div>
                                </div>
                                <div className="contact-bttn">
                                    <div className="contact-bttn-in">
                                        <p>Chat Now</p>
                                    </div>
                                </div>
                            </div>
                            <div class="gridContact-item" data-aos="fade-right">
                                <div className="gridContact-allItem">
                                    <FontAwesomeIcon icon={faVideo} className='contact-font' />
                                    <div className="contactNumber">
                                        <h6>Video Call</h6>
                                        <p>089-772-766-63</p>
                                    </div>    
                                </div>
                                <div className="contact-bttn">
                                    <div className="contact-bttn-in">
                                        <p>Video Call Now</p>
                                    </div>
                                </div>
                            </div>  
                            <div class="gridContact-item" data-aos="fade-right">
                                <div className="gridContact-allItem">
                                    <FontAwesomeIcon icon={faEnvelope} className='contact-font' />
                                    <div className="contactNumber">
                                        <h6>Message</h6>
                                        <p>089-772-766-63</p>
                                    </div>
                                </div>
                                <div className="contact-bttn">
                                    <div className="contact-bttn-in">
                                        <p>Message Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-map" data-aos="fade-left">
                        <iframe
                            className="frame"
                            width="500" 
                            height="550" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15776.92389019312!2d115.20401424229121!3d-8.669571249394956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409539a6ff7b%3A0xeddc9dec6be3b127!2sLevel%20Twenty%20One%20Mall%2C%20Dauh%20Puri%20Klod%2C%20Kec.%20Denpasar%20Bar.%2C%20Kota%20Denpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1699982650343!5m2!1sid!2sid" 
                            styles={{border: "0px"}} 
                            allowfullscreen
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact