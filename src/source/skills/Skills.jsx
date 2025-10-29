import React from 'react'
import Titles from '../Titles'
import SkillsSwiper from './SkillsSwiper'

export default function Skills() {
  return (
   <>
   <div className="skills mainView flex flex-col justify-center items-center">
   <Titles value='My skills' />
   <SkillsSwiper />
   </div>
  


   </>
  )
}
