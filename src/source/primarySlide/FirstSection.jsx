import React from 'react'

export default function FirstSection() {
  return (
    <>
      <div className="firstSectionContainer w-full h-screen relative flex justify-center items-center">
        <img src="public/image/Working Desk With Laptop & Phone.jpg" alt="backgroung image"
          className='top-0 left-0 absolute z-0 w-full h-screen max-w-full object-cover brightness-50' />



        <div className="content relative flex flex-col justify-center items-center md:w-[50%] w-[60%]  text-gray-100 gap-10">
          <h1 className='text-center text-2xl md:text-4xl'>Hi there! my name is Maryam Dadashpoor and I'm a
            <span className='text-[#CFBB99]'> front-end developer</span></h1>
          <a
            href="/resume.pdf"
            download
            className="cvDownload rounded-[50px] bg-[#e5d7c4] text-xl text-[#4c3d19] pt-2 pb-2 pl-4 pr-4 cursor-pointer hover:bg-[#cfbb99] transition-all duration-300"
          >
            download cv
          </a>
        </div>
      </div>
    </>
  )
}
