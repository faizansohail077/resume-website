import React from 'react'
import ResumeBottomLeft from './ResumeBottomLeft'
import ResumeBottomRight from './ResumeBottomRight'

const ResumeBottom = () => {
    return (
            <div className="flex flex-wrap">

                <div className='w-[100%] md:w-[30%] py-5 bg-[#070606]' >
                    <ResumeBottomLeft />
                </div>

                <div className='px-5 w-[100%] py-5  md:w-[70%]'>
                    <ResumeBottomRight />
                </div>
            </div>

    )
}

export default ResumeBottom