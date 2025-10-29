import React from 'react'

export default function NavBar(props) {
  return (
    <>
     <li className= 'relative group flex flex-col gap-2'>
        <a href="#" className='navbar-item'>{props.value}</a>
        <span
          className="absolute left-1/2 bottom-0 h-[1px] w-0 bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0">
          </span>
      </li>
    </>
  )
}
