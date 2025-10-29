import React from 'react'

export default function Titles(props) {
    return (
        <>
            <div className="title pt-12 pb-12 flex flex-col justify-center items-center">
                <h3 className='text-xl text-[#414033] relative pb-8'>{props.value}</h3>
                <span className='h-[1px] w-[6%] bg-[#414033] absolute'></span>
            </div>
        </>
    )
}
