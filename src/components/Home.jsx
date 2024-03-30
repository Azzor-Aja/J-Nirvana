import React from 'react'
import image from '../assets/top.png'
import '../App.css'

function Home() {
  return (
        <div className="content">
            <div className="content-in">
                <div className="content-all">
                    <div className="cont-one">
                        <h5 data-aos="fade-right" >STARTED AT <a href="#"> 50% </a> OFF & FREE SHIPPING</h5>
                        <h1 data-aos="fade-right" >
                        Discover Most Intelligent Smartphone
                        </h1>
                        <p data-aos="fade-right" >Find a variety of smartphones that suit you very easily, forget all difficulties in finding a gadgets for you.</p>
                        <div className="cont-one-bttn" data-aos="fade-right">
                                Get Start
                        </div>
                    </div>
                    <div className="cont-two">
                        <img
                            data-aos="fade-left" 
                            src={ image }
                            alt="test" 
                        />
                    </div>
                </div>
                <div 
                className="board-all"
                data-aos="fade-up"
                >
                    <div className="board-in">
                        <div className="board">
                            <div className="premium">
                                <h1>5K+</h1>
                                <p>Premium Product</p>
                            </div>
                            <div className="custom">
                                <h1>750K+</h1>
                                <p>Premium Product</p>
                            </div>
                            <div className="outlet">
                                <h1>10K+</h1>
                                <p>Premium Product</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Home