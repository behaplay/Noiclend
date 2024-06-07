import React from 'react'

const Images = () => {
    return (
        <section>
            <div className='flex flex-col items-center justify-center mt-20 pb-16'>
                <h1 className='text-[36px] font-bold'>What kind of Coffee we serve for you</h1>
                <p className='text-[14px] text-gray-700'>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className='flex flex-row gap-8 justify-center'>
                <div className='flex flex-col gap-8'>
                    <img src="	https://preview.colorlib.com/theme/coffee/img/g1.jpg" className='w-[350px] h-[272px]' alt="" />
                    <img src="https://preview.colorlib.com/theme/coffee/img/g2.jpg" className='w-[350px] h-[408px]' alt="" />
                </div>
                <div className='flex flex-col gap-8'>
                    <img src="https://preview.colorlib.com/theme/coffee/img/g3.jpg" className='w-[730px] h-[408px]' alt="" />
                    <div className='flex flex-row gap-8'>
                        <img src="	https://preview.colorlib.com/theme/coffee/img/g4.jpg" className='w-[350px] h-[272px]' alt="" />
                        <img src="https://preview.colorlib.com/theme/coffee/img/g5.jpg" className='w-[350px] h-[272px]' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Images