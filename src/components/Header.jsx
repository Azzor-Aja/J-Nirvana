import React from 'react'
import '../App.css'

function Header() {
  return (
    <section id='beranda'>
        <div className="nav-all">
            <div className="nav-in">
                <div className="nav">
                    <h2>NIRVANA</h2>
                    <ul>
                        <li><a href="#beranda">Home</a></li>
                        <li><a href="#content">What's New</a></li>
                        <li><a href="#product">Products</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#article">Article</a></li>
                    </ul>
                    <a href="#contact">
                        <div className="bttn"> 
                            <p>Contact</p>
                            <div className="bttn-slide">
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header