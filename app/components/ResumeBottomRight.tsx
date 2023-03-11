import React from 'react'

const data = [
  { id: 0, role: "Frontend Developer", startDate: 'Aug 2021', endDate: 'present', company: "SeamlessIdeas", detail: "As a Front-End Developer specializing in React, I am employed at Seamlessideas where I served as a crucial member of the development team. My primary responsibility was to maintain clear and effective communication with clients, comprehend their requirements and translate them into functional web and mobile applications. Utilizing my expertise in the Frontend development, I successfully delivered high-quality software solutions that met and exceeded client expectations." },
  { id: 1, role: "Full Stack Developer", startDate: 'June 2021', endDate: 'July 2021', company: "BNG Labs", detail: "As a Full Stack Developer specializing in MERN, I was employed at BNG Labs where I served as a crucial member of the development team. My primary responsibility was to maintain clear and effective communication with clients, comprehend their requirements and translate them into functional web and mobile applications." },
]
const education = [
  { id: 0, course: "Intermediate", startDate: ' 2017', endDate: '2019', school: "Govt City College" },
  { id: 1, course: "High School", startDate: ' 2006', endDate: '2016', school: "Happy Palace Grammer School" },
]

const ResumeBottomRight = () => {
  return (
    < >
      {/* Work Experience */}
      <div className='pb-5' >
        <p className='text-3xl pb-2 pt-5 md:pt-0  border-b-2 border-black font-bold text-center md:text-left md:w-[50%]'>
          Work Experience
        </p>

        <div className='py-10' >
          {data?.map((d,index) => (

            <div key={index} className='mb-10 md:mb-0 flex item-center flex-wrap' >

              <div className='w-[100%] md:w-[25%] text-center md:text-right px-5' >
                <p className='text-2xl font-bold'>{d.role}</p>
                <p className='text-md font-medium'>{d.startDate} - {d.endDate}</p>
              </div>

              <div className='h-[25vh] border-l-2 border-black hidden md:inline relative'>
                <div className='bg-black h-5 w-5 rounded-full absolute top-0 left-[-10px] ' />
              </div>

              <div className='w-[100%] md:w-[68%] text-center md:text-left px-5'>

                <p className='text-2xl font-bold' >{d.company}</p>
                <p className='text-md pt-2 '>{d.detail}</p>
              </div>
            </div>


          ))}
        </div>

      </div>

      
      {/* Eductaion */}
      <div className='pb-5' >
      <p className='text-3xl pb-2 pt-5 md:pt-0  border-b-2 border-black font-bold text-center md:text-left md:w-[50%]'>
          Education
        </p>

        <div className='py-10' >
          {education?.map((d,index) => (

            <div key={index}  className='mb-10 md:mb-0 flex item-center flex-wrap' >

              <div className='w-[100%] md:w-[25%] text-center md:text-right px-5' >
                <p className='text-2xl font-bold'>{d.course}</p>
                <p className='text-md font-medium'>{d.startDate} - {d.endDate}</p>
              </div>

              <div className='h-[15vh] border-l-2 border-black hidden md:inline relative'>
                <div className='bg-black h-5 w-5 rounded-full absolute top-0 left-[-10px] ' />
              </div>

              <div className='w-[100%] md:w-[68%] text-center md:text-left px-5'>

                <p className='text-2xl font-bold' >{d.school}</p>
              </div>
            </div>


          ))}
        </div>

      </div>

    </>
  )
}

export default ResumeBottomRight