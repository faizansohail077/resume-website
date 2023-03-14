import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

const data = [
    { id: 0, text: "+92 347 2479763", heading: 'Phone', icon: FiPhoneCall },
    { id: 1, text: "faizansohail077@gmail.com", heading: 'Email', icon: AiOutlineMail },
    { id: 2, text: "fb area block 6", heading: 'Address', icon: GoLocation },
]
const skills = [
    { id: 0, text: "Html" },
    { id: 1, text: "Css" },
    { id: 2, text: "Javascript" },
    { id: 3, text: "React" },
    { id: 4, text: "React-Native" },
    { id: 5, text: "Firebase" },
]

const ResumeBottomLeft = () => {
    return (
        < >
            {/* contact info */}
            <div className='text-white pb-5' >
                <p className='text-3xl py-5 md:py-2  border-b-2 text-center md:text-right w-full md:w-[70%]'>

                    Contact Info
                </p>

                <div className='py-10  ' >
                    {data?.map((d, index) => (
                        <div key={index} className='group cursor-pointer mt-5 flex items-center px-5 gap-5' >
                            <div className=' p-2 border-2 rounded-full' >
                                <d.icon />
                            </div>
                            <div className='w-[80%]' >
                                <p>{d.heading}</p>
                                <p>{d.text}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

            {/* skills */}
            <div className='text-white pb-5' >
                <p className='text-3xl py-5 md:py-2  border-b-2 text-center md:text-right w-full md:w-[70%]'>

                    Skills
                </p>

                <div className='py-10 flex flex-wrap ' >
                    {skills?.map((d, index) => (
                        <div key={index} className='cursor-pointer hover:animate-bounce mt-5 pb-2 flex items-center px-5 gap-5' >
                            <p className='pb-1 border-b-2' >{d.text}</p>
                        </div>
                    ))}


                </div>

            </div>




        </>
    )
}

export default ResumeBottomLeft