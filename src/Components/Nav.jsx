import React from 'react';
import img from "../imgs/logo-bookmark.svg";

function Nav() {
    return (
        <nav className=' font-Poppins container flex items-start py-4 mt-4 sm:mt-12'>
            <div className='py-1 flex-shrink-0 cursor-pointer'><img src={img} alt="Company Logo" className='bg-cover'/></div>
            <ul className='hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-sm'>
                <li className='cursor-pointer'>Features</li>
                <li className='cursor-pointer'>Pricing</li>
                <li className='cursor-pointer'>Contact</li>
                <button type="button" className='bg-bookmark-red text-white rounded-md px-7 py-3 uppercase'>Login</button>
            </ul>
            <div className="flex sm:hidden flex-1 justify-end flex-shrink-0">
                <i className="text-2xl fas fa-bars"></i>
            </div>
        </nav>
    )
}

export default Nav      
