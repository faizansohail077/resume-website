import React from 'react'

const About = () => {
    return (
        <div className="flex flex-wrap bg-[#1F1E1D] py-5 md:py-10">
          
            <div className='w-[100%]  md:w-[30%]  ' >
                <div className='text-white h-full flex items-center' >
                    <p className='animate-pulse text-3xl py-5  border-b-2 text-center md:text-right w-full md:w-[70%]'>
                        About Me
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-center w-[100%] py-10 md:py-0 md:w-[70%] '>
                <p className='text-white pt-2 px-5 md:pt-0 text-center md:text-left text-lg' >
                    I am a full stack web and mobile app developer having 1+ year of experience in my field. I've done multiple projects of Web and Mobile development using Mern Stack with 100% client satisfaction. My goal is to assist corporations and individuals to create their online presence. I will work on your project in reasonable price, in response you will get some amazing experience from my services. I will assist you at any level - whether you are a developer, a student, or a business owner wanting to induce your own net app. If you wish a custom net application then you're within the right place.
                </p>
            </div>
        </div>
    )
}

export default About