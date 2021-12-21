import React from 'react';
import Image from "../imgs/hero-bg.png";

function Hero() {
    return (
         <section className='relative'>
             <div className="container flex flex-col-reverse lg:flex-row items-center gp-12 mt-14 lg:mt-28">
                 <div className="flex flex-1 flex-col items-center lg:items-start">
                     <h2 className="text-3xl text-bookmark-blue md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                         A Simple Bookmark Manager
                     </h2>
                     <p className="text-lg text-center mb-6 lg:text-left text-bookmark-grey ">
                     A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
                        load instantly. Try it for free.
                     </p>
                     <div className="flex justify-center flex-wrap gap-6">
                         <button className="btn btn-purple hover:bg-bookmark-white hover:text-bookmark-grey">Get it on Chrome</button>
                         <button className="btn btn-white hover:bg-bookmark-purple hover:text-bookmark-white">Get it on Firefox</button>
                     </div>
                 </div>
                 <div className="flex justify-center flex-shrink-0 flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                     <img src={Image} className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full' alt="Image" />
                 </div>
             </div>
         </section>
    )
}

export default Hero
