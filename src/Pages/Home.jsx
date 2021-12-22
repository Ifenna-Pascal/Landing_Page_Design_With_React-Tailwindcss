import React, {useState} from 'react'
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import Features from '../Components/Features';
import Download from '../Components/Download';
import FAQ from '../Components/FAQ';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

function Home() {
    const [scroll, setScroll] = useState(false);
    const showScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setScroll(true);
        } else if (scrolled <= 300) {
            setScroll(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
    };
    return (
        <>
            <Nav />
            <Hero />
            <Features />
            <Download />
            <FAQ />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
