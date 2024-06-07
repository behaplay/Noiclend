import React from 'react'
import CountUp from 'react-countup'

const Number = () => {
    return (
        <section className='bg-orange-300'>
            <div className='flex flex-col items-center justify-center mt-40 pt-20 pb-16'>
                <h1 className='text-[36px] font-bold text-white'>What kind of Coffee we serve for you</h1>
                <p className='text-[14px] text-white'>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className=' flex flex-row gap-8 items-center justify-center flex-wrap'>
                <div className='flex flex-col gap-3 w-[540px]'>
                    <img src="	https://preview.colorlib.com/theme/coffee/img/r1.png" className='w-[80px] h-[50px]' alt="" />
                    <div className='flex flex-row items-center'>
                        <span className='text-[18px] font-bold text-white mr-4'>lorem ipusm</span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Orange_star.svg/1200px-Orange_star.svg.png" className='w-[15px] h-[15px]' alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Orange_star.svg/1200px-Orange_star.svg.png" className='w-[20px] h-[15px]' alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Orange_star.svg/1200px-Orange_star.svg.png" className='w-[15px] h-[15px]' alt="" />
                        <img src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" className='w-[15px] h-[15px]' alt="" />
                        <img src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" className='w-[15px] h-[15px]' alt="" />
                    </div>
                    <p className='text-white text-[14px]'>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.</p>
                </div>
                <div className='flex flex-col gap-3 w-[540px]'>
                    <img src="	https://preview.colorlib.com/theme/coffee/img/r2.png" className='w-[80px] h-[50px]' alt="" />
                    <div className='flex flex-row items-center'>
                        <span className='text-[18px] font-bold text-white mr-4'>lorem ipusm</span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Orange_star.svg/1200px-Orange_star.svg.png" className='w-[15px] h-[15px]' alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Orange_star.svg/1200px-Orange_star.svg.png" className='w-[20px] h-[15px]' alt="" />
                        <img src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" className='w-[15px] h-[15px]' alt="" />
                        <img src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" className='w-[15px] h-[15px]' alt="" />
                        <img src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" className='w-[15px] h-[15px]' alt="" />
                    </div>
                    <p className='text-white text-[14px]'>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.</p>
                </div>
            </div>
            <div className='flex flex-row gap-40 justify-center mt-16 pb-20 flex-wrap'>
            <div className='flex flex-col'>
                <CountUp className='text-[60px] text-white' duration={4} start={0} end={2536}/>
                <h5 className='text-white text-[14px]'>Happy Client</h5>
            </div>
            <div className='flex flex-col'>
                <CountUp className='text-[60px] text-white' duration={4} start={0} end={7562}/>
                <h5 className='text-white text-[14px]'>Total Prpjects</h5>
            </div>
            <div className='flex flex-col'>
                <CountUp className='text-[60px] text-white' duration={4} start={0} end={2013}/>
                <h5 className='text-white text-[14px]'>Cups Coffee</h5>
            </div>
            <div className='flex flex-col'>
                <CountUp className='text-[60px] text-white' duration={4} start={0} end={10536}/>
                <h5 className='text-white text-[14px]'>Total submitted</h5>
            </div>
            </div>
        </section>
    )
}

export default Number