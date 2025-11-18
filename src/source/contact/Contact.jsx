import React from 'react'
import Titles from '../Titles'
import { TfiEmail } from "react-icons/tfi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <>
      <div className="contactBack pb-8" id='contact'>
        <Titles value='Contacts' />
        <div className="contactInfo mainView flex flex-col md:flex-row justify-around items-center gap-6">
          <div className="email flex flex-col justify-center items-center text-[#414033]">
            <div className="emailTitle flex items-center justify-center gap-2">
              <TfiEmail />
              <span>E-mail</span>
            </div>
            <a
              href="mailto: mrymdadashpoordev@gmail.com"
              className="hover:text-gray-600 transition"
            >
              mrymdadashpoordev@gmail.com
            </a>

          </div>


          <div className="socialMedia flex flex-col  justify-center items-center gap-4 text-[#414033]">
            <div className="socialTitle flex items-center justify-center gap-2">
              <IoShareSocialOutline />
              <span>Social media</span>
            </div>
            <div className="socialIcons flex gap-3">
              <a
                href="https://github.com/Mrymindigo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/maraymindigo07/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
