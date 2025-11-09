import React from 'react'
import { Link } from 'react-scroll'
export default function NavBar({value, targetId}) {
  return (
    <>
      <li className='relative group flex flex-col gap-2'>
        <Link
          to={targetId}
          smooth={true}
          duration={500}
          offset={-70} // برای تنظیم فاصله از بالای صفحه، مثلاً وقتی هدر داری
          className="navbar-item cursor-pointer"
        >
          {value}
        </Link>
        {/* <a href={`#${targetId}`} className='navbar-item'>{props.value}</a> */}
        <span
          className="absolute left-1/2 bottom-0 h-[1px] w-0 bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:left-0">
        </span>
      </li>
    </>
  )
}
