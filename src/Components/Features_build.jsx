import React from 'react'

function Features_build({img, text_p, text_h1, reverse}) {
    return (
        <div class="relative mt-20 lg:mt-24 lg:mb-40">
        <div className= {`container flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row' } items-center justify-center gap-x-24`}>
          {/* <!-- Image --> */}
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={img}
              alt=""
            />
          </div>
          {/* <!-- Content --> */}
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-bookmark-blue">{text_h1}</h1>
            <p class="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              {text_p}
            </p>
            <button type="button" class="btn btn-purple hover:bg-bookmark-white hover:text-black">More Info</button>
          </div>
        </div>
        {/* <!-- Rounded Rectangle --> */}
        <div
         className= {`${reverse ? 'reverse' : 'no_reverse' }`}
        ></div>
      </div>
    )
}

export default Features_build
