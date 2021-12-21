import React from 'react'
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import Features from '../Components/Features';
import Download from '../Components/Download';
import FAQ from '../Components/FAQ';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

function Home() {
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
