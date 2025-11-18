import React, { useState } from "react";
import NavBar from './NavBar'
import ThemeToggle from './ThemeToggle'


export default function header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className='headerContainer absolute z-10 top-0 left-0 w-full'>
        <div className="mainView flex justify-between items-center pt-6 pb-6">
          <div className="logo text-gray-100 text-2xl md:text-3xl">MARYAM</div>

          <ul className="hidden md:flex navBarContainer gap-8 text-gray-100 transition-all duration-300 delay-150">
            <NavBar value='about me' targetId='about' />
            <NavBar value='skills' targetId='skills' />
            <NavBar value='portfoilo' targetId='portfolio' />
            <NavBar value='contact me' targetId='contact' />
          </ul>

          <button
            className="md:hidden text-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Icon: X (close)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Icon: hamburger
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {/* <div className="themeLangSetup mainView flex justify-end">
          <ThemeToggle />
        </div> */}

        {/* MOBILE MENU OVERLAY */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden flex justify-end">
            {/* Slide Menu - نیمه عرض */}
            <div className="w-1/2 bg-[#e5d7c4] h-full py-8 px-6 flex flex-col gap-6 text-[#4c3d19] shadow-lg animate-slideIn">
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="self-end mb-4 text-[#4c3d19] hover:text-white"
                aria-label="بستن منو"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Menu Links */}
              <NavBar value="about me" />
              <NavBar value="skills" />
              <NavBar value="portfolio" />
              <NavBar value="contact me" />
            </div>
          </div>
        )}

      </header>
    </>
  )
}
