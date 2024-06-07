import React from 'react'

const Header = () => {
    return (
        <header className='px-48 b fixed w-full'>
            <div className='flex flex-row gap-4 items-end justify-end pt-4'>
                <a href="https://www.kinopoisk.ru/film/1048334/?utm_referrer=www.google.com" target='_blank' className=' text-[14px] col cursor-default'>Mon-Fri: 8am to 2pm</a>
                <a href="https://www.kinopoisk.ru/film/1048334/?utm_referrer=www.google.com"  target='_blank' className='text-[14px] col cursor-default'> Sat-Sun: 11am to 4pm</a>
                <a href="+(012) 6985 236 7512" className='text-[14px] col'>(012) 6985 236 7512</a>
            </div>
            <div className='flex flex-row justify-between items-center mt-1 pb-4'>
                <img src="	https://preview.colorlib.com/theme/coffee/img/logo.png" alt="" />
                <ul className='col font-semibold text-[12px] flex flex-row gap-6 cursor-pointer'>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>COFFEE</li>
                    <li>REVIEW</li>
                    <li>BLOG</li>
                </ul>
            </div>
        </header>
    )
}

export default Header