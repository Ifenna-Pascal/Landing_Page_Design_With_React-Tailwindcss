import React from 'react';
import { Link } from "react-scroll";

function Sidebar({open, toggle}) {
    return (
        <div className='relative'>
            <section className={`bg-bookmark-blue w-3/5 fixed py-5 mx-40 sticky transition duration-600 ease-in-out ${open ? 'opacity-100 left-0 top-0' : 'opacity-0 hidden'}`}>
                <ul className={`flex flex-col gap justify-start items-center gap-12 uppercase text-sm text-bookmark-white`}>
                    <Link to="features" onClick={()=> toggle()} smooth={true} duration={500} className='cursor-pointer tracking-wider' activeClass='text-bookmark-red font-bold' offset={-84} spy={true} exact="true"> Features </Link>
                    <Link to="pricing" onClick={()=> toggle()} smooth={true} duration={500} className='cursor-pointer tracking-wider' activeClass='text-bookmark-red font-bold'  offset={-84} spy={true} exact="true"> Pricing</Link>
                    <Link to="faq" onClick={()=> toggle()} smooth={true} duration={500} className='cursor-pointer tracking-wider' activeClass='text-bookmark-red font-bold'  offset={-84} spy={true} exact="true"> FAQ </Link>
                    <Link to="contact" onClick={()=> toggle()} smooth={true} duration={500} className='cursor-pointer tracking-wider' activeClass='text-bookmark-red font-bold'  offset={-84} spy={true} exact="true"> Contact us </Link>
                    <button type="button" onClick={()=> toggle()} className='bg-bookmark-red text-white rounded-md px-7 py-3 uppercase'>Login</button>
                </ul>
            </section>
        </div>  
    )
}

export default Sidebar
