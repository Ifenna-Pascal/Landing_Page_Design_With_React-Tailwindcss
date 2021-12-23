import React, {useState} from 'react'
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import Features from '../Components/Features';
import Download from '../Components/Download';
import FAQ from '../Components/FAQ';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebasr';

function Home() {
    const [scroll, setScroll] = useState(false);
    const [open, setOpen] = useState(false);
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

    const toggle = ()=> {
        setOpen(!open)
    }
    window.addEventListener('scroll', showScroll);
    return (
        <>
            <Nav toggle={toggle} open={open} />
            <Sidebar  toggle={toggle} open={open}/>
            <Hero />
            <Features />
            <Download />
            <FAQ />
            <Contact />
            <Footer />
            <div onClick={()=> scrollToTop()} className={`fixed bottom-20 sm:bottom-60 p-2 sm:p-4 sm:right-8 cursor-pointer right-3 z-20 bg-bookmark-purple rounded-full flex-shrink-0 flex-col items-center ${scroll ? 'flex' : 'hidden'}`}>
                <i class=" flex-1 text-white text-sm sm:text-2xl fas fa-arrow-up"></i>
            </div>
        </>
    )
}

export default Home
