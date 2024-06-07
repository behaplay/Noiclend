import React from 'react'
import Helper from './Helper'

const Card = () => {
    return (
        <section className='bg-[url(https://preview.colorlib.com/theme/coffee/img/menu-bg.jpg)] '>
            <div className='flex flex-col items-center justify-center pt-32 pb-16 mt-28'>
                <h1 className='text-[36px] font-bold'>What kind of Coffee we serve for you</h1>
                <p className='text-[14px] text-gray-700'>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className='flex flex-row flex-wrap gap-10 justify-center pb-20'>
                <Helper name={"Cappuccino"} />
                <Helper name={"Americano"} />
                <Helper name={"Espresso"} />
                <Helper name={"Macchiato"} />
                <Helper name={"Mocha"} />
                <Helper name={"Coffee Latte"} />
                <Helper name={"Piccolo Latte"} />
                <Helper name={"Ristretto"} />
                <Helper name={"Affogato"} />
            </div>
        </section>
    )
}

export default Card