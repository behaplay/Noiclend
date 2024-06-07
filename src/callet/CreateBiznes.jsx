import React from 'react'

const CreateBiznes = () => {
    return (
        <section className='mt-20'>
            <div className='flex flex-col items-center justify-center mt-20 pb-16'>
                <h1 className='text-[36px] font-bold'>What kind of Coffee we serve for you</h1>
                <p className='text-[14px] text-gray-700'>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className='flex flex-row gap-10 justify-center flex-wrap'>
                <div className='w-[540px] flex flex-col gap-3'>
                    <img src="https://preview.colorlib.com/theme/coffee/img/b1.jpg" alt="" />
                    <div className='flex flex-row gap-3'>
                        <button className='border w-[90px] h-[32px] text-[12px] rounded-full hover:text-white hover:bg-orange-500 duration-300'>Travel</button>
                        <button className='border w-[90px] h-[32px] text-[12px] rounded-full hover:text-white hover:bg-orange-500 duration-300'>Life Style</button>
                    </div>
                    <h2 className='text-[18px] font-bold'>Portable latest Fashion for young women</h2>
                    <p className='text-[14px] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <p className='text-[14px] font-semibold'>31st January, 2018</p>
                </div>
                <div className='w-[540px] flex flex-col gap-3'>
                    <img src="https://preview.colorlib.com/theme/coffee/img/b2.jpg" alt="" />
                    <div className='flex flex-row gap-3'>
                        <button className='border w-[90px] h-[32px] text-[12px] rounded-full hover:text-white hover:bg-orange-500 duration-300'>Travel</button>
                        <button className='border w-[90px] h-[32px] text-[12px] rounded-full hover:text-white hover:bg-orange-500 duration-300'>Life Style</button>
                    </div>
                    <h2 className='text-[18px] font-bold'>Portable latest Fashion for young women</h2>
                    <p className='text-[14px] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <p className='text-[14px] font-semibold'>31st January, 2018</p>
                </div>
            </div>
        </section>
    )
}

export default CreateBiznes