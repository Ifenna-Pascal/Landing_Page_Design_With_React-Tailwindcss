import React from 'react';
import img1 from "../imgs/illustration-features-tab-1.png";
import img2 from "../imgs/illustration-features-tab-2.png";
import img3 from "../imgs/illustration-features-tab-3.png"
import Features_build from './Features_build';

function Features() {
    return (
       <section className='bg-bookmark-white py-20 mt-20 lg:mt-60'>
           <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
               <h2 className="text-3xl text-center text-bookmark-blue">Features</h2>
               <p className="text-center text-bookmark-grey mt-4"> Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between
                    your devices so you can access them on the go.</p>
           </div>  
    <Features_build img={img1} text_h1='Bookmark in one click' text_p='Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control
              over how you manage your favourite sites.' reverse={false}/>
     <Features_build img={img2} text_h1='Intelligent search' text_p='Our powerful search feature will help you find saved sites in no time at all. No need to crawl through all
              of your bookmarks.' reverse={true}/>
    <Features_build img={img3} text_h1='Share your bookmarks' text_p='Easily share your bookmarks and collections with others. Create a shareable link that you can send at the
              click of a button.' reverse={false}/>
       </section>
    )
}

export default Features
