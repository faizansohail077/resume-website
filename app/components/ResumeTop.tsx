import React from 'react'
import MyPng from './My.png'
const ResumeTop = () => {
    return (
        <div className="flex flex-wrap">
            <div className='w-[100%]  md:w-[30%] h-[30vh] bg-[#b3cece]' >
                <img src={MyPng.src} style={{ height: '100%', width: '100%', objectFit: 'contain' }} alt={'My'} />
            </div>
            <div className='flex items-center justify-center w-[100%] py-10 md:py-0  md:w-[70%] lg:w-[50%] '>
                <div>
                    <h3 className='text-center md:text-left text-4xl md:text-6xl text-black font-bold' >Muhammad Faizan</h3>
                    <h5 className='pt-2 md:pt-0 text-center md:text-left text-2xl md:text-4xl text-black underline font-semibold' >Web and App Developer</h5>
                </div>
            </div>
        </div>
    )
}

export default ResumeTop