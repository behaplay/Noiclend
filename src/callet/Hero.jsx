import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[url(https://preview.colorlib.com/theme/coffee/img/header-bg.jpg)] bg-cover w-full h-[740px]">
      <div className='pl-52 flex flex-col gap-2 pt-40'>
        <h6 className='col text-[14px] font-bold'>NOW YOU CAN FEEL THE ENERGY</h6>
        <h1 className='col text-[60px] font-bold w-[610px]'>Start your day with
          a black Coffee</h1>
        <button className='bg-white block py-2 w-[140px] px-8 border border-white rounded-full hover:bg-transparent duration-300 hover:text-white'>BUY NOW</button>
      </div>
    </section>
  )
}

export default Hero