import React from 'react';
import { Link } from "react-scroll";

function Sidebar() {
    return (
         <section>
            <ul className={`flex flex-col gap justify-end items-center gap-12 uppercase text-sm ${scrollNav ? 'text-white' : 'text-bookmark-blue'}`}>
                <Link to="features" smooth={true} duration={500} className='cursor-pointer tracking-wider' activeClass='text-bookmark-red font-bold' offset={-84} spy={true} exact="true"> Features </Link>
                <Link to="pricing" smooth={true} duration={500} className='cursor-pointer tracking-wider' activeClass='text-bookmark-red font-bold'  offset={-84} spy={true} exact="true"> Pricing</Link>
                <Link to="faq" smooth={true} duration={500} className='cursor-pointer tracking-wider' activeClass='text-bookmark-red font-bold'  offset={-84} spy={true} exact="true"> FAQ </Link>
                <Link to="contact" smooth={true} duration={500} className='cursor-pointer tracking-wider' activeClass='text-bookmark-red font-bold'  offset={-84} spy={true} exact="true"> Contact us </Link>
                <button type="button" className='bg-bookmark-red text-white rounded-md px-7 py-3 uppercase'>Login</button>
            </ul>
         </section>
    )
}

export default Sidebar
