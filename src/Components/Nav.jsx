import React, {useState, useEffect} from 'react';
import img from "../imgs/logo-bookmark.svg";
import { Link, animateScroll as scroll } from 'react-scroll';

function Nav() {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 100) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);
    return (
        <nav className={`font-Poppins container flex items-start py-4 mt-4 px-7 sm:mt-12 sticky top-0 z-20 ${scrollNav && 'scroll_nav'}`}>
            <div className='py-1 flex-shrink-0 cursor-pointer' onClick={()=> scroll.scrollToTop()}><img src={img} alt="Company Logo" className='bg-cover'/></div>
            <ul className={`hidden sm:flex flex-1 justify-end items-center gap-12 uppercase text-sm  text-bookmark-blue`}>
                <Link to="features" smooth={true} duration={500} className='cursor-pointer tracking-wider' activeClass='text-bookmark-red font-bold' offset={-84} spy={true} exact="true"> Features </Link>
                <Link to="pricing" smooth={true} duration={500} className='cursor-pointer tracking-wider' activeClass='text-bookmark-red font-bold'  offset={-84} spy={true} exact="true"> Pricing</Link>
                <Link to="faq" smooth={true} duration={500} className='cursor-pointer tracking-wider' activeClass='text-bookmark-red font-bold'  offset={-84} spy={true} exact="true"> FAQ </Link>
                <Link to="contact" smooth={true} duration={500} className='cursor-pointer tracking-wider' activeClass='text-bookmark-red font-bold'  offset={-84} spy={true} exact="true"> Contact us </Link>
                <button type="button" className='bg-bookmark-red text-white rounded-md px-7 py-3 uppercase'>Login</button>
            </ul>
            <div className="flex sm:hidden flex-1 justify-end flex-shrink-0">
                <i className="text-2xl fas fa-bars"></i>
            </div>
        </nav>
    )
}

export default Nav      
