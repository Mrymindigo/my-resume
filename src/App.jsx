import { useState } from 'react'
import { Element } from 'react-scroll'
import './App.css'
import Header from './source/header/Header'
import FirstSection from './source/primarySlide/FirstSection'
import AboutMe from './source/aboutMe/AboutMe'
import Skills from './source/skills/Skills'
import Portfolio from './source/portfolio/Portfolio'
import Contact from './source/contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <FirstSection />

      <Element name='targetId'>
        <AboutMe />
      </Element>

      <Element name='targetId'>
      <Skills />
      </Element>

      <Element name='targetId'>
      <Portfolio />
      </Element>

      <Element name='targetId'>
      <Contact />
      </Element>
    </>
  )
}

export default App
