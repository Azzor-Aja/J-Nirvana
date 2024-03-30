import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Home from './components/Home';
import Content from './components/Content';
import Product from './components/Product';
import Fitur from './components/Fitur';
import Article from './components/Article';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        AOS.init( {duration: 1500} );
    }, []);
    return(
        <div className="app">
            <Header />
            <Home />
            <Content />
            <Product />
            <Fitur />
            <Article />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
