import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_msrtdo5', 'template_v25elxi', form.current, {
                publicKey: 'NBLIX9lUsMQnezTw-',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <footer className='bg-[url(https://preview.colorlib.com/theme/coffee/img/footer-bg.jpg)] w-full h-[530px] bg-cover bg-no-repeat mt-32 flex flex-row items-center pt-28 pl-36 gap-10'>
            <div className='w-[445px] flex flex-col gap-6'>
                <h6 className='text-[18px] text-white font-bold'>About Us</h6>
                <p className='text-[14px] text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                <p className='text-[14px] text-white'>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
            </div>
            <div className='w-[445px] flex flex-col gap-6'>
                <h6 className='text-[18px] text-white font-bold'>Newsletter</h6>
                <p className='text-[14px] text-white'>Stay update with our latest</p>
                <form ref={form} onSubmit={sendEmail}   className='flex flex-row items-center'>
                    <input type="email" name='user_email' className='p-2 w-[350px]' placeholder='Enter Email' />
                    <input type="submit" value={"Send"}  className='w-[40px] h-[40px] bg-orange-500 text-[12px] text-white active:bg-gray-300 active:text-black'/>
                </form>
            </div>
            <div className='w-[445px] flex flex-col gap-6'>
                <h6 className='text-[18px] text-white font-bold'>Follow Us</h6>
                <p className='text-[14px] text-white'>Let us be social</p>
                <div className='flex flex-row gap-3 cursor-pointer' >
                    <img src="https://bullerockgc.com/wp-content/uploads/2018/05/facebook-logo-png-white-i6.png" className='w-[20px] h-[20px] text-white' alt="" />
                    <img src="https://clinics.law.harvard.edu/wp-content/uploads/2019/07/Twitter_Logo_WhiteOnImage.png" className='w-[20px] h-[20px] text-white' alt="" />
                    <img src="https://cdn2.iconfinder.com/data/icons/generic-06/100/Artboard_106-512.png" className='w-[20px] h-[20px] text-white' alt="" />
                    <img src="https://static-00.iconduck.com/assets.00/behance-icon-2048x1298-jp4p0udd.png" className='w-[20px] h-[20px] text-white' alt="" />
                </div>
            </div>
        </footer>
    );
};