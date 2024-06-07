import React from 'react'

const Helper = ({ name }) => {
    return (
        <div className='w-[350px] p-[30px] bg-gray-100 rounded-lg'>
            <div className='flex flex-row items-center justify-between'>
                <p className='text-[18px] font-bold'>{name}</p>
                <p className='text-[18px] font-bold text-brown-400'>$49</p>
            </div>
            <p className='text-[14px] text-gray-700 mt-5'>Usage of the Internet is becoming more common due to rapid advance.</p>
        </div>
    )
}

export default Helper