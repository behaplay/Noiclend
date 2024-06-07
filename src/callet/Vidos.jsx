import React from 'react'

const Vidos = () => {
  return (
    <section className='flex flex-row justify-center items-center gap-20 mt-10'>
      <div className='bg-[url(https://media.wired.com/photos/64bad54a52bb92d7ad7c335a/master/w_1600%2Cc_limit/Delonghi-TrueBrew-Beans-Gear.jpg)] bg-cover rounded-xl w-[570px] h-[350px] flex justify-center items-center'>
        <a href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
          <img src="https://preview.colorlib.com/theme/coffee/img/play-icon.png.webp" alt="" />
        </a>
      </div>
      <div className='w-[450px]'>
        <h6 className='text-[12px] text-brown-500 font-semibold'>LIVE COFFEE MAKING PROCESS.</h6>
        <h1 className='text-[36px] font-bold w-[410px]'>We Telecast our
          Coffee Making Live</h1>
        <span className='text-[14px]'>We are here to listen from you deliver exellence</span>
        <p className='text-[14px] mt-3 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        <img src="https://preview.colorlib.com/theme/coffee/img/signature.png" className='mt-4 w-[144px] h-[40px]' alt="" />
      </div>
    </section>
  )
}

export default Vidos