import React from 'react'
import '../css/article.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEye, faBookmark } from '@fortawesome/free-regular-svg-icons'
import imageOne from '../assets/articleOne.webp'
import imageTwo from '../assets/articleTwo.avif'
import imageThree from '../assets/articleThree.jpg'
import imageFour from '../assets/articleFour.jpg'
import imageFive from '../assets/articleFive.jpg'
import imageSix from '../assets/articleSix.jpg'


function article() {
  return (
    <section id='article'>
        <div className="item-all">
          <div className="item-in">
            <div className="item">
                <div className="item-title-one">
                <p data-aos="fade-in">Our Article</p>
                </div>
                <div className="item-title-two">
                <h1 data-aos="fade-in">Our Article For This Week</h1>
                </div>
                <div className="item-title-three">
                <p data-aos="fade-in">Lets find out about the information of latest technologies in our article that we always updated
                </p>
                </div>
            </div>
          </div>
        </div>
        <div className="articleTitle-all">
            <div className="articleTitle-in">
                <div className="articleTitle">
                    <div class="gridArticle">
                        <div class="gridArticle-item" data-aos="fade-right">
                            <div className="gridArticle-one">
                                <img src={imageOne}/>
                            </div>
                            <div className="textArticle">
                                <div className="textArticle-in">
                                    <div className="left">
                                        <div className="textClock">
                                            <FontAwesomeIcon icon={faClock} className='clock'/>
                                            <p>1 Year Ago</p>
                                        </div>
                                        <div className="textVisit">
                                            <FontAwesomeIcon icon={faEye} className='visit'/>
                                            <p>50.5k</p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="textSave">
                                            <FontAwesomeIcon icon={faBookmark} className='bookmark'/>
                                            <p>5.9k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="peakArticle">
                                    <h3>Tips to make you're iPhone more durable</h3>
                                    <p>
                                        Some of the following tips can make you 
                                        users of phantom smartphones c ...
                                    </p>
                                </div>
                                <div className="articleButton">
                                    <h4>Read More</h4>
                                </div>
                            </div>
                        </div>
                        <div class="gridArticle-item" data-aos="fade-in">
                            <div className="gridArticle-two">
                                <img src={imageTwo}/>
                            </div>
                            <div className="textArticle">
                                <div className="textArticle-in">
                                    <div className="left">
                                        <div className="textClock">
                                            <FontAwesomeIcon icon={faClock} className='clock'/>
                                            <p>1 Year Ago</p>
                                        </div>
                                        <div className="textVisit">
                                            <FontAwesomeIcon icon={faEye} className='visit'/>
                                            <p>50.5k</p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="textSave">
                                            <FontAwesomeIcon icon={faBookmark} className='bookmark'/>
                                            <p>5k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="peakArticle">
                                    <h3>Tips to make you're iPhone more durable</h3>
                                    <p>
                                        Some of the following tips can make you 
                                        users of phantom smartphones c ...
                                    </p>
                                </div>
                                <div className="articleButton">
                                    <h4>Read More</h4>
                                </div>
                            </div>
                        </div>
                        <div class="gridArticle-item" data-aos="fade-left">
                            <div className="gridArticle-three">
                                <img src={imageThree}/>
                            </div>
                            <div className="textArticle">
                                <div className="textArticle-in">
                                    <div className="left">
                                        <div className="textClock">
                                            <FontAwesomeIcon icon={faClock} className='clock'/>
                                            <p>1 Year Ago</p>
                                        </div>
                                        <div className="textVisit">
                                            <FontAwesomeIcon icon={faEye} className='visit'/>
                                            <p>50.5k</p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="textSave">
                                            <FontAwesomeIcon icon={faBookmark} className='bookmark'/>
                                            <p>5k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="peakArticle">
                                    <h3>Tips to make you're iPhone more durable</h3>
                                    <p>
                                        Some of the following tips can make you 
                                        users of phantom smartphones c ...
                                    </p>
                                </div>
                                <div className="articleButton">
                                    <h4>Read More</h4>
                                </div>
                            </div>
                        </div>
                        <div class="gridArticle-item" data-aos="fade-right">
                            <div className="gridArticle-four">
                                <img src={imageFour}/>
                            </div>
                            <div className="textArticle">
                                <div className="textArticle-in">
                                    <div className="left">
                                        <div className="textClock">
                                            <FontAwesomeIcon icon={faClock} className='clock'/>
                                            <p>1 Year Ago</p>
                                        </div>
                                        <div className="textVisit">
                                            <FontAwesomeIcon icon={faEye} className='visit'/>
                                            <p>50.5k</p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="textSave">
                                            <FontAwesomeIcon icon={faBookmark} className='bookmark'/>
                                            <p>5k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="peakArticle">
                                    <h3>Tips to make you're iPhone more durable</h3>
                                    <p>
                                        Some of the following tips can make you 
                                        users of phantom smartphones c ...
                                    </p>
                                </div>
                                <div className="articleButton">
                                    <h4>Read More</h4>
                                </div>
                            </div>
                        </div>
                        <div class="gridArticle-item" data-aos="fade-in">
                            <div className="gridArticle-five">
                                <img src={imageFive}/>
                            </div>
                            <div className="textArticle">
                                <div className="textArticle-in">
                                    <div className="left">
                                        <div className="textClock">
                                            <FontAwesomeIcon icon={faClock} className='clock'/>
                                            <p>1 Year Ago</p>
                                        </div>
                                        <div className="textVisit">
                                            <FontAwesomeIcon icon={faEye} className='visit'/>
                                            <p>50.5k</p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="textSave">
                                            <FontAwesomeIcon icon={faBookmark} className='bookmark'/>
                                            <p>5k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="peakArticle">
                                    <h3>Tips to make you're iPhone more durable</h3>
                                    <p>
                                        Some of the following tips can make you 
                                        users of phantom smartphones c ...
                                    </p>
                                </div>
                                <div className="articleButton">
                                    <h4>Read More</h4>
                                </div>
                            </div>
                        </div>
                        <div class="gridArticle-item" data-aos="fade-left">
                            <div className="gridArticle-six">
                                <img src={imageSix}/>
                            </div>
                            <div className="textArticle">
                                <div className="textArticle-in">
                                    <div className="left">
                                        <div className="textClock">
                                            <FontAwesomeIcon icon={faClock} className='clock'/>
                                            <p>1 Year Ago</p>
                                        </div>
                                        <div className="textVisit">
                                            <FontAwesomeIcon icon={faEye} className='visit'/>
                                            <p>50.3k</p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="textSave">
                                            <FontAwesomeIcon icon={faBookmark} className='bookmark'/>
                                            <p>5k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="peakArticle">
                                    <h3>Tips to make you're iPhone more durable</h3>
                                    <p>
                                        Some of the following tips can make you 
                                        users of phantom smartphones c ...
                                    </p>
                                </div>
                                <div className="articleButton">
                                    <h4>Read More</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default article