import React from 'react'
import Titles from '../Titles'

export default function AboutMe() {
    return (
        <>
            <div className='bg-[#cfbb99]'>
                <div className="aboutMeSection mainView flex flex-col justify-center items-center ">
                    <Titles value='About me' />
                    <p className='w-[60%] text-gray-800 p-4 flex justify-center items-center pb-32 '>
                    I’m a passionate Front-End Developer focused on building clean, user-centered interfaces with modern web
                        technologies. My main stack is React, and I love turning complex ideas into smooth,
                        responsive experiences that feel effortless to users.
                        I pay close attention to detail, care deeply about code quality,
                        and enjoy collaborating with teams that value creativity and precision.
                        I’m always learning, exploring new tools, and improving my craft to
                        deliver better products and experiences on the web.
                    </p>
                </div>
            </div>

        </>
    )
}
